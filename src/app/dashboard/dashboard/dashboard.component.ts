import { Component, OnInit } from '@angular/core';
import {NoteService} from "../../services/note.service";
import {Note} from "../../models/note.model";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ApiService} from "../../services/api.service";
import {AuthenticateService} from "../../services/authenticate.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  noteBody : string;
  editNoteBody : string;
  editNoteId: string;
  date : Date;
  notes : Observable<Note[]>;
  editNoteContent : string;
  editNoteNote: Note;
  private authenticatedUser = this._authService.user;
  private refresh: Subject = new Subject();

  constructor(private _apiService : ApiService, private _authService: AuthenticateService) { }

  editNote(note: Note){
    console.log(note.note);
    this.editNoteBody = note.note;
    this.editNoteId = note.id;
  }

  removeNote(note : Note) {
    this._apiService.deleteNote(note.id, this.authenticatedUser.id).subscribe(res => {
      console.log(res);
      // 'refresh' page
      this.refresh.next(true);
    }, err => console.error(err));
  }

  onSubmit(){
    this._apiService.createNote(new Note(null, this.authenticatedUser.id, this.noteBody)).subscribe(res =>{
      console.log(res);
      this.refresh.next(true);
    }, err => console.error(err));
  }

  onSubmitEdit(){
    this._apiService.updateNote(new Note(this.editNoteId, this.authenticatedUser.id, this.editNoteBody)).subscribe(res =>{
      console.log(res);
      this.refresh.next(true);
    }, err => console.error(err));
  }

  ngOnInit() {
    this.refresh.subscribe(() => this.notes = this._apiService.getNotesByUserID(this.authenticatedUser.id));
    this.refresh.next(true);
  }

}
