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
  private readonly _services = {
    auth: 'auth',
    edge: 'listings'
  };
  constructor(private _httpClient : HttpClient) { }

  createNote(note: Note): Observable<Note> {
    return this._httpClient.post<Note>(`${this._url}/${this._services.edge}/notes/add`, note);
  }

  getNotesByUserID(): Observable<Note[]> {
    return this._httpClient.get<Note[]>(`${this._url}/${this._services.edge}/notes/get`);
  }

  deleteNote(note:  Note) {
    return this._httpClient.delete(`${this._url}/${this._services.edge}/notes/delete`);
  }
}
