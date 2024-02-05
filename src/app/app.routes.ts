import { Routes } from '@angular/router';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListTypesComponent } from './list-types/list-types.component';
import { AddPostComponent } from './add-post/add-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';


export const routes: Routes = [
  { path: '', component: ListPostsComponent },
  { path: 'posts', component: ListPostsComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'types', component: ListTypesComponent },
  { path: 'post/add', component: AddPostComponent },
  { path: 'post/edit/:id', component: UpdatePostComponent },
];
