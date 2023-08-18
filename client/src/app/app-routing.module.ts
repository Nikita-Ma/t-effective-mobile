import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {AuthComponent} from "./auth/auth.component";

const routes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}