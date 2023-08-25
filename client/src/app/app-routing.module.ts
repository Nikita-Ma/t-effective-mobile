import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {AuthComponent} from "./auth/auth.component";
import {RegisterComponent} from "./register/register.component";
import {PostDetailsComponent} from "./post-details/post-details.component";
import {appGuard} from "./app.guard";

const routes: Routes = [
  {path: 'posts', component: PostsComponent, canActivate: [appGuard]},
  {path: 'auth', component: AuthComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'posts', children: [
      {
        path: ':id',
        component: PostDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
