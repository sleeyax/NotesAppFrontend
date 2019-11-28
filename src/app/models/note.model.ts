export class Note {
  noteID: number;
  userID: number;
  note: string;
  updatedAt?: string;

  constructor(noteID: number, userID: number, note: string, updatedAt?: string)
  {
    this.noteID = noteID;
    this.userID = userID;
    this.note = note;
    this.updatedAt = updatedAt;
  }
}
