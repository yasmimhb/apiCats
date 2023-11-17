import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatapiService {
  private apiUrl = 'https://api.thecatapi.com/v1/images/search';
  private apiKey = 'live_63i9DHazb5DFcbTQIohZ2zvRZD11OgS9eMWgVCfne9vtmNKKDZJZOiSXWM9KT8Ju';

  constructor(private http: HttpClient) {}

  getRandomCat(): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get<any>(url);
  }

  getTenRandomCats(): Observable<any> {
    const url = `${this.apiUrl}?limit=10`;
    return this.http.get<any>(url);
  }

  getTenBengalCats(): Observable<any> {
    const url = `${this.apiUrl}?limit=10&breed_ids=beng&api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
