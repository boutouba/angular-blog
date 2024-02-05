import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeService } from './../services/type.service';
import { Type } from './../models/type.model';

@Component({
  selector: 'app-list-types',
  standalone: true,
  imports: [],
  templateUrl: './list-types.component.html',
  styleUrl: './list-types.component.css'
})
export class ListTypesComponent implements OnInit {
  constructor(private typeService: TypeService) { }
  types?: Type[];
  ngOnInit() {
    this.typeService.getAll()
          .subscribe({
            next: (data) => {
              this.types = data;
              console.log(data);
            },
            error: (e) => console.error(e)
          });
  }
}
