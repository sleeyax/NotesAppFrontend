import { Injectable } from '@angular/core';
import {User} from "../models/user.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Note} from "../models/note.model";

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private readonly _url: string = 'http://127.0.0.1:8080';
  //private readonly _url: string = 'https://helpless-wombat-90.localtunnel.me';
  private readonly _services = {
    auth: 'auth',
    edge: 'listings'
  };
  constructor(private _httpClient : HttpClient) { }

  //TODO: Backend functies komen mogelijk nog niet overeen, aanpassen indien nodig

  createNote(note: Note): Observable<Note> {
    return this._httpClient.post<Note>(`${this._url}/${this._services.edge}/notes/add`, note);
  }

  getNoteByNoteID(noteID : number){
    return this._httpClient.get<Note>(`${this._url}/${this._services.edge}/notes/getNotesByNoteID/`+ noteID);
  }

  getNotesByUserID(): Observable<Note[]> {
    return this._httpClient.get<Note[]>(`${this._url}/${this._services.edge}/notes/get/` + +localStorage.getItem("userID"));
  }

  updateNote(note : Note){
    return this._httpClient.put<Note[]>(`${this._url}/${this._services.edge}/notes/get`, note);
  }

  deleteNote(note:  Note) {
    //todo: te verwijderen object meegeven
    return this._httpClient.delete(`${this._url}/${this._services.edge}/notes/delete`);
  }
}
