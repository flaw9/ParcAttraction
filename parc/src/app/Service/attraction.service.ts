import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { AttractionInterface } from '../Interface/attraction.interface';
import { MessageInterface } from '../Interface/message.interface';
import { CritiqueInterface } from "../Interface/critique.interface";

@Injectable({
  providedIn: 'root',
})
export class AttractionService {
  private url: string = "http://127.0.0.1:5000/attraction";

  constructor(private dataService: DataService) {

  }

  public getAllAttraction() : Observable<AttractionInterface[]> {
    const data = this.dataService.getData(this.url);
    return data as Observable<AttractionInterface[]>;
  }

  public getAllAttractionVisible(): Observable<AttractionInterface[]> {
    const data = this.dataService.getData(this.url + "/visible");
    return data as Observable<AttractionInterface[]>;
  }

  public postAttraction(attraction: AttractionInterface): Observable<MessageInterface> {
    const data = this.dataService.postData(this.url, attraction);
    return data as Observable<MessageInterface>;
  }
  
  public getCritique(attraction_id: number): Observable<CritiqueInterface[]> {
    const data = this.dataService.getData(this.url + "/" + attraction_id + "/critique");
    return data as Observable<CritiqueInterface[]>;
  }
  
  public postCritique(critique: CritiqueInterface): Observable<MessageInterface> {
    const data = this.dataService.postData(this.url + "/critique", critique);
    return data as Observable<MessageInterface>;
  }
}
