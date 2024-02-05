import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from './../services/post.service';
import { Post } from './../models/post.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-posts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {

constructor(private postService: PostService,private route: ActivatedRoute,private router: Router) { }
  post: Post = {
      title: '',
      content: '',
      type: ''
  };

  save(): void {
    const data = {
      title: this.post.title,
      content: this.post.content,
      type: this.post.type
    };

    this.postService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/posts']);
        },
        error: (e) => console.error(e)
      });
  }

}
