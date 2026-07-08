using Microsoft.AspNetCore.Mvc;
using backend.DTOs;
using backend.Services;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController(AuthService authService) : ControllerBase
{
	[HttpPost("register")]
	public async Task<IActionResult> Register(RegisterRequest request)
	{
		var response = await authService.RegisterAsync(request);
		if (response is null)
			return BadRequest("E-mail ou nome de usuário já cadastrado.");
		return Ok(response);
	}

	[HttpPost("login")]
	public async Task<IActionResult> Login(LoginRequest request)
	{
		var response = await authService.LoginAsync(request);
		if (response is null)
			return Unauthorized("E-mail ou senha inválidos.");
		return Ok(response);
	}
}