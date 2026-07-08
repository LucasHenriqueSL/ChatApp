using System;
namespace backend.Models;

public class User
{
    public int Id { get; set; }
    public required string NomeUsuario { get; set; }
    public required string Email { get; set; }
    public required string Senha { get; set; }
    public DateTime DataCriacao { get; set; }
    public ICollection<Message> Mensagens { get; set; } = new List<Message>();
    public ICollection<Room> Salas { get; set; } = new List<Room>();
}