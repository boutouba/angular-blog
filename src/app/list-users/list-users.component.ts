import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit {

  constructor(private http: HttpClient) { }
  users: any;
  ngOnInit() {
    this.getUsers(); // to prevent ngFor to throw while we wait for API to return data
  }

  public getUsers() {
    this.http.get('https://reqres.in/api/users').subscribe(res => {
      console.log(res)
      this.users = res;
      // data contains actual array of users
    });
  }


}
