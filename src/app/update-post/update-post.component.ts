import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from './../services/post.service';
import { Post } from './../models/post.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-posts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-post.component.html',
  styleUrl: './update-post.component.css'
})
export class UpdatePostComponent implements OnInit {

  post: Post = {
      id:'',
      title: '',
      content: '',
      type: ''
  };
    constructor(private postService: PostService,private route: ActivatedRoute,private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
          this.post.id = params['id']; // Access the 'id' parameter from the URL
          console.log('Test ID:', this.post.id);
        });
        this.getPost(this.post.id);
    }

    updatePost(): void {
      this.postService.update(this.post.id, this.post)
        .subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (e) => console.error(e)
        });
    }

    getPost(id: any): void {
       this.post = {};

        this.postService.get(id)
          .subscribe({
            next: (data) => {
            this.post = {
                id: data.id,
                title: data.title,
                content: data.content
            };
            if(data.type.id != null) {
              this.post.type = data.type.id;
            }
            console.log(data);
            },
            error: (e) => console.error(e)
          });
      }

}
