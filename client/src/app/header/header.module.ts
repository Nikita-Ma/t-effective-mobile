import { NgModule } from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {HeaderComponent} from "./header.component";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {AuthModule} from "../auth/auth.module";
import {PostsModule} from "../posts/posts.module";
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule, ReactiveFormsModule, NgIf,
    MatFormFieldModule, MatInputModule, MatSnackBarModule,
    MatCardModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
