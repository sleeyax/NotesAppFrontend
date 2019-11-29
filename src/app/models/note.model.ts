export class Note {
  noteID: number;
  userID: number;
  note: string;
  updatedAt?: Date;

  constructor(noteID: number, userID: number, note: string, updatedAt?: Date)
  {
    this.noteID = noteID;
    this.userID = userID;
    this.note = note;
    this.updatedAt = updatedAt;
  }
}
