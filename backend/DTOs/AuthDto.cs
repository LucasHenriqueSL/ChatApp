namespace backend.DTOs;

public record RegisterRequest(
    string NomeUsuario,
    string Email,
    string Senha
);

public record LoginRequest(
    string Email,
    string Senha
);

public record AuthResponse(
    int Id,
    string NomeUsuario,
    string Email,
    string Token
);