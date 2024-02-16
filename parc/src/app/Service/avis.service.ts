// avis.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  private apiUrl = 'http://127.0.0.1:5000/attraction'; // Remplacez cela par l'URL de votre API

  constructor(private http: HttpClient) { }

  getAvis(attractionId: number): Observable<any[]> {
    const url = `${this.apiUrl}/avis?attractionId=${attractionId}`;
    return this.http.get<any[]>(url);
  }
}
