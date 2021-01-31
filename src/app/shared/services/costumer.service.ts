import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  private customersUrl = 'http://localhost:8000/client'; 
  public customers = [];
  

  constructor(private http: HttpClient) { }

    getCustomersData(): Observable<any> {
      return this.http.get(this.customersUrl);
    }

    create(customerData: any): Observable<any> {
      return this.http.post('http://localhost:8000/client', { client: customerData });
    }
}