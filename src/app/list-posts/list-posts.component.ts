import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from './../services/post.service';
import { Post } from './../models/post.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent implements OnInit {

constructor(private postService: PostService,private route: ActivatedRoute,private router: Router) { }
  posts?: Post[];
  ngOnInit() {
    this.postService.getAll()
          .subscribe({
            next: (data) => {
              this.posts = data;
              console.log(data);
            },
            error: (e) => console.error(e)
          });
  }

  addPost(): void {
    this.router.navigate(['/post/add']);
  }

  editPost(id: any): void {
    this.router.navigate([`/post/edit/${id}`]);
  }

   removePost(id: any): void {
      this.postService.delete(id)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.router.navigate(['/posts']);
          },
          error: (e) => console.error(e)
        });
    }

}
