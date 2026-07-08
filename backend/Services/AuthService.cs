using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using backend.Data;
using backend.DTOs;
using backend.Models;

namespace backend.Services;

public class AuthService(AppDbContext context, IConfiguration configuration)
{
    public async Task<AuthResponse?> RegisterAsync(RegisterRequest request)
    {
        var existe = await context.Users.AnyAsync(u =>
            u.Email == request.Email || u.NomeUsuario == request.NomeUsuario);

        if (existe) return null;

        var user = new User
        {
            NomeUsuario = request.NomeUsuario,
            Email = request.Email,
            Senha = BCrypt.Net.BCrypt.HashPassword(request.Senha),
            DataCriacao = DateTime.UtcNow
        };

        context.Users.Add(user);
        await context.SaveChangesAsync();

        var token = GerarToken(user);
        return new AuthResponse(user.Id, user.NomeUsuario, user.Email, token);
    }

    public async Task<AuthResponse?> LoginAsync(LoginRequest request)
    {
        var user = await context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);

        if (user is null || !BCrypt.Net.BCrypt.Verify(request.Senha, user.Senha))
            return null;

        var token = GerarToken(user);
        return new AuthResponse(user.Id, user.NomeUsuario, user.Email, token);
    }

    private string GerarToken(User user)
    {
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"]!));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Name, user.NomeUsuario),
            new Claim(ClaimTypes.Email, user.Email)
        };

        var token = new JwtSecurityToken(
            issuer: configuration["Jwt:Issuer"],
            audience: configuration["Jwt:Audience"],
            claims: claims,
            expires: DateTime.UtcNow.AddHours(8),
            signingCredentials: credentials
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}