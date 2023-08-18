import {NgModule} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {AuthComponent} from "./auth.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule, ReactiveFormsModule, NgIf,
    MatFormFieldModule, MatInputModule, MatSnackBarModule,
    MatCardModule,
  ],
  exports: [AuthComponent]
})
export class AuthModule {
}
