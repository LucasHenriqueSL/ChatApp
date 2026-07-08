namespace backend.Models;

public class Message
{
    public int Id { get; set; }
    public required string Texto { get; set; }
    public DateTime DataEnvio { get; set; }
    public int UserId { get; set; }
    public required User User { get; set; }
    public int RoomId { get; set; }
    public required Room Room { get; set; }
}