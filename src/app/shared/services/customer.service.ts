import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = 'http://localhost:8000/client'; 

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any>{
    return this.http.get(this.url);
  }
}
