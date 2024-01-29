import { Routes } from '@angular/router';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { ListUsersComponent } from './list-users/list-users.component';

export const routes: Routes = [
  { path: '', component: ListPostsComponent },
  { path: 'posts', component: ListPostsComponent },
  { path: 'users', component: ListUsersComponent },
];
