import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { AttractionInterface } from '../Interface/attraction.interface';
import { MessageInterface } from '../Interface/message.interface';

@Injectable({
  providedIn: 'root',
})
export class AttractionService {

  constructor(private dataService: DataService) {}

  public getAllAttraction(): Observable<AttractionInterface[]> {
    const url = "http://127.0.0.1:5000/attraction";
    return this.dataService.getData(url) as Observable<AttractionInterface[]>;
  }

  public postAttraction(attraction: AttractionInterface): Observable<MessageInterface> {
    const url = "http://127.0.0.1:5000/attraction";
    return this.dataService.postData(url, attraction) as Observable<MessageInterface>;
  }

  public updateAttractionVisibility(attractionId: number, visible: boolean): Observable<MessageInterface> {
    const url = `http://127.0.0.1:5000/attraction/${attractionId}/visibility`;
    const data = { visible }; 
    return this.dataService.putData(url, data) as Observable<MessageInterface>;
  }
  public getCritique(attraction_id: number): Observable<CritiqueMeanInterface> {
    const data = this.dataService.getData(this.url + "/" + attraction_id + "/critique");
    return data as Observable<CritiqueMeanInterface>;
  }
  
  public postCritique(critique: CritiqueInterface): Observable<MessageInterface> {
    const data = this.dataService.postData(this.url + "/critique", critique);
    return data as Observable<MessageInterface>;
  }
}
