export class Note {
  id: string;
  userId: number;
  note: string;
  updatedAt?: Date;

  constructor(noteID: string, userID: number, note: string, updatedAt?: Date)
  {
    this.id = noteID;
    this.userId = userID;
    this.note = note;
    this.updatedAt = updatedAt;
  }
}
