import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  refreshNotes: Subject<boolean> = new Subject();

  constructor() { }
}
