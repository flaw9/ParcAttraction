import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) { }

  public getData(url: string) {
    let data = this.http.get(url);
    return data;
  }

  public postData(url: string, data: any) {
    let result = this.http.post(url, data);
    return result;
  }

  public deleteData(url: string) {
    let result = this.http.delete(url);
    return result;
  }
  public putData(url: string, data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(url, data, { headers }).pipe(
      catchError(error => {
        throw 'Error in putData. Details: ' + error;
      })
    );
  }
}