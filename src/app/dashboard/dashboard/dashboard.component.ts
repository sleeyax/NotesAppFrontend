import { Component, OnInit } from '@angular/core';
import {Note} from "../../models/note.model";
import {Observable} from "rxjs";
import {ApiService} from "../../services/api.service";
import {AuthenticateService} from "../../services/authenticate.service";
import {DashboardService} from "../../services/dashboard.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  noteBody : string;
  noteId: string;
  notes : Observable<Note[]>;
  private authenticatedUser = this.authService.user;
  private refresh = this.dashboardService.refreshNotes;

  constructor(
    private _apiService : ApiService,
    private authService: AuthenticateService,
    private dashboardService: DashboardService
  ) { }

  editNote(note: Note){
    console.log(note.note);
    this.noteBody = note.note;
    this.noteId = note.id;
  }

  removeNote(note : Note) {
    this._apiService.deleteNote(note.id, this.authenticatedUser.id).subscribe(res => {
      console.log(res);
      // 'refresh' page
      this.refresh.next(true);
    }, err => console.error(err));
  }

  ngOnInit() {
    this.refresh.subscribe(() => this.notes = this._apiService.getNotesByUserID(this.authenticatedUser.id));
    this.refresh.next(true);
  }

  onModalSubmit() {
    return () => this.refresh.next(true);
  }

  addNote() {
    this.noteBody = '';
    this.noteId = null;
    console.log(this.noteId);
  }
}
