namespace backend.Models;

public class Room
{
    public int Id { get; set; }
    public required string Nome { get; set; }
    public DateTime DataCriacao { get; set; }
    public int UserId { get; set; }
    public required User User { get; set; }
    public ICollection<Message> Mensagens { get; set; } = new List<Message>();
    public ICollection<User> Membros { get; set; } = new List<User>();
}