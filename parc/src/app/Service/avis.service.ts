import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AvisInterface } from '../Interface/avis.interface';
import { DataService } from './data.service';
import { MessageInterface } from '../Interface/message.interface';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  constructor(private dataService: DataService) { }

  public getAvisFromAttraction(id:string) : Observable<AvisInterface[]> {
    const url = "http://127.0.0.1:5000/attraction/"+id+"/avis"
    const data = this.dataService.getData(url);
    return data as Observable<AvisInterface[]>;
  }

  public postAvis(avis: AvisInterface, id: string): Observable<MessageInterface> {
    const url = "http://127.0.0.1:5000/attraction/"+id+"/avis";
    const data = this.dataService.postData(url, avis);
    return data as Observable<MessageInterface>;
  }

}
