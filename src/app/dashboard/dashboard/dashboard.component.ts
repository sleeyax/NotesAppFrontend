import { Component, OnInit } from '@angular/core';
import {NoteService} from "../../services/note.service";
import {Note} from "../../models/note.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  noteBody : string;
  note : Note;
  date : Date;
  notes : Observable<Note[]>;

  constructor(private _noteService : NoteService) { }

  editNote(){

  }

  removeNote(){

  }

  addNote(){

  }

  onSubmit(){
    this.date = new Date();
    //TODO: userID ophalen met zuul
    this.note = new Note(0,0,this.noteBody, this.date);
    this._noteService.createNote(this.note).subscribe(res =>{
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.notes = this._noteService.getNotesByUserID();
  }

}
