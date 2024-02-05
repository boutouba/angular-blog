import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

const baseUrl = 'http://localhost:8090/api/v1/posts';
const _baseUrl_ = 'http://localhost:8090/api/v1/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(baseUrl);
  }

  get(id: any): Observable<Post> {
    return this.http.get<Post>(`${_baseUrl_}/${id}`);
  }

   create(data: any): Observable<any> {
      return this.http.post(`${_baseUrl_}/add`, data);
   }

  delete(id: any): Observable<any> {
      return this.http.delete(`${_baseUrl_}/delete/${id}`);
  }

  update(id: any, data: any): Observable<any> {
      return this.http.put(`${_baseUrl_}/edit/${id}`, data);
  }


}
