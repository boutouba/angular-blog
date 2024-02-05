import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './../services/user.service';
import { User } from './../models/user.model';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit {

  constructor(private userService: UserService) { }
  users?: User[];
  ngOnInit() {
    this.userService.getAll()
          .subscribe({
            next: (data) => {
              this.users = data;
              console.log(data);
            },
            error: (e) => console.error(e)
          });
  }

}
