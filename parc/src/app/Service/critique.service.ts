import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CritiqueInterface} from "../Interface/critique.interface";
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class CritiqueService {
  private url: string = "http://127.0.0.1:5000/critique";

  constructor(private dataService: DataService) { }
}
