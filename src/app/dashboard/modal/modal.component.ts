import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {AuthenticateService} from "../../services/authenticate.service";
import {Note} from "../../models/note.model";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  note: string;

  @Input()
  noteId: string;

  @Input()
  onSubmit: Function;

  private authenticatedUser = this._authService.user;

  constructor(private _apiService : ApiService, private _authService: AuthenticateService) { }

  ngOnInit() {
  }

  onSubmitForm() {
    this._apiService.createNote(new Note(this.noteId, this.authenticatedUser.id, this.note)).subscribe(res =>{
      console.log(res);
      this.onSubmit();
    }, err => console.error(err));
  }

  checkSpelling(text: string) {
    this._apiService.checkSpelling(text).subscribe(res => {
      console.log(res);
    }, err => console.error(err));
  }

  get isEdit() {
    return this.noteId != null;
  }
}
