import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventTypesService {
  private url = 'http://localhost:8000/event-type'; 

  constructor(private http: HttpClient) { }

  getEventTypes(): Observable<any>{
    return this.http.get(this.url);
  }
}
