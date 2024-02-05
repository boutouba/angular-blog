import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Type } from '../models/type.model';

const baseUrl = 'http://localhost:8090/api/v1/types';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Type[]> {
    return this.http.get<Type[]>(baseUrl);
  }

  get(id: any): Observable<Type> {
    return this.http.get<Type>(`${baseUrl}/${id}`);
  }

}
