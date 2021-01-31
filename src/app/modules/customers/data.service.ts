import { Injectable } from '@angular/core';
import { IProdutos } from '../../interfacesBanco/produtos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private customersUrl = 'http://localhost:8000/client'; 
  public customers = [];
  

  constructor(private http: HttpClient) { }

    getCustomersData(): Observable<any>{
      return this.http.get(this.customersUrl);
    }
}