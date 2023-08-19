import {NgModule} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {PostDetailsComponent} from './post-details.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    RouterLink,
    MatButtonModule,
    MatToolbarModule,
    FormsModule, ReactiveFormsModule, NgIf,
    MatFormFieldModule, MatInputModule, MatSnackBarModule,
    MatCardModule, RouterLink
  ]
})
export class PostDetailsModule {
}
