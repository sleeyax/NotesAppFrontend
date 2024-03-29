import {Injectable} from '@angular/core';
import {UserLogin} from "../models/user-login.model";
import {HttpClient} from "@angular/common/http";
import {TokenResponse} from "../models/token-response.model";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {Note} from "../models/note.model";
import Spelling from "../models/spelling-model";
import {TextConversion} from "../TextConversion";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly _url: string = 'http://127.0.0.1:8080';
  private readonly _services = {
    auth: 'auth',
    edge: 'listings'
  };

  constructor(private _httpClient: HttpClient) { }

  /**
   * Log user in
   * @param userLogin
   */
  login(userLogin: UserLogin): Observable<TokenResponse> {
    return this._httpClient.post<TokenResponse>(`${this._url}/${this._services.auth}/login`, userLogin);
  }


  getUserByID(userid: number): Observable<User> {
    return this._httpClient.get<User>(`${this._url}/${this._services.edge}/users/search/userid=${userid}` );
  }

  /**
   * Add a new user
   * @param user
   */
  createUser(user: User): Observable<User> {
    return this._httpClient.post<User>(`${this._url}/${this._services.auth}/users/add`, user);
  }

  updateUser(user : User, userId: number){
    return this._httpClient.put<User>(`${this._url}/${this._services.edge}/users/${userId}`, user);
  }

  deleteUserByID(userId: number) {
    return this._httpClient.delete(`${this._url}/${this._services.edge}/users/${userId}`);
  }

  /**
   * Add a note
   * @param note
   */
  createNote(note: Note): Observable<Note> {
    return this._httpClient.post<Note>(`${this._url}/${this._services.edge}/notes/create`, note);
  }

  /**
   * Fetch notes from specified user
   * @param userid
   */
  getNotesByUserID(userid: number): Observable<Note[]> {
    return this._httpClient.get<Note[]>(`${this._url}/${this._services.edge}/notes/search/userid=${userid}`);
  }

  /**
   * Edit note
   * @param note
   */
  updateNote(note : Note){
    return this._httpClient.put<Note>(`${this._url}/${this._services.edge}/notes/update`, note);
  }

  /**
   * Delete specified note from specified user
   * @param noteId
   * @param userId
   */
  deleteNote(noteId: string, userId: number) {
    return this._httpClient.delete(`${this._url}/${this._services.edge}/notes/delete/${noteId}/user/${userId}`);
  }

  /**
   * Check spelling of specified text
   * @param text
   */
  checkSpelling(text: string) {
    return this._httpClient.post<Spelling>(`${this._url}/${this._services.edge}/spelling/check`, {text});
  }

  /**
   * Convert text to specified format
   * Converts to lowercase by default
   * @param text
   * @param conversion
   */
  convert(text: string, conversion?: TextConversion) {
    let resource;

    switch (conversion) {
      case TextConversion.UPPER:
        resource = 'toupper';
        break;
      case TextConversion.CAPITALIZE:
        resource = 'tocapitalize';
        break;
      case TextConversion.LEET:
        resource = 'toleet';
        break;
      case TextConversion.LOWER:
      default:
        resource = 'tolower';
        break;
    }

    return this._httpClient.post<{
      originalText: string,
      convertedText: string
    }>(`${this._url}/${this._services.edge}/convert/${resource}`, {text});
  }
}
