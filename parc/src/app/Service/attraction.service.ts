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
}
