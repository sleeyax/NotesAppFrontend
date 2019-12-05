import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {AuthenticateService} from "../../services/authenticate.service";
import {Note} from "../../models/note.model";
import Spelling from "../../models/spelling-model";
import {TextConversion} from "../../TextConversion";

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
  private spellingCheckResults: Spelling;

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
      this.spellingCheckResults = res;
    }, err => console.error(err));
  }

  get isEdit() {
    return this.noteId != null;
  }

  convert(text: string, conversion: TextConversion) {
    this._apiService.convert(text, conversion).subscribe(converted => {
      console.log(converted);
      this.note = converted.convertedText;
    }, err => console.error(err));
  }

  toUpper() {
    this.convert(this.note, TextConversion.UPPER);
  }

  toLower() {
    this.convert(this.note, TextConversion.LOWER);
  }

  toCapitalized() {
    this.convert(this.note, TextConversion.CAPITALIZE);
  }

  toLeet() {
    this.convert(this.note, TextConversion.LEET);
  }

  onClose(){
    this.spellingCheckResults = null;
  }
}
