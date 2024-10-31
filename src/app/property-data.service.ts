import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Use HttpClient from @angular/common/http
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertyDataService {
  private url = '/assets/properties.json';

  constructor(private http: HttpClient) {}

  getProperties(): Observable<{ properties: any[] }> {
    return this.http.get<{ properties: any[] }>(this.url);
  }
}
