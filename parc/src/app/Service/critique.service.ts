import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {DataService} from "./data.service";
import {MessageInterface} from "../Interface/message.interface";

@Injectable({
  providedIn: 'root'
})
export class CritiqueService {
  private url: string = "http://127.0.0.1:5000/critique";

  constructor(private dataService: DataService) { }
  
  public deleteCritique(critique_id: number): Observable<MessageInterface> {
    const data = this.dataService.deleteData(this.url + "/" + critique_id);
    return data as Observable<MessageInterface>;
  }
}
