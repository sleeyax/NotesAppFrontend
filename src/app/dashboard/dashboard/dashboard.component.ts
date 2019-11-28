import { Component, OnInit } from '@angular/core';
import {NoteService} from "../../services/note.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  noteBody : string;

  constructor(private _noteService : NoteService) { }

  editNote(){

  }

  removeNote(){

  }

  addNote(){

  }

  onSubmit(){

  }

  ngOnInit() {
  }

}
