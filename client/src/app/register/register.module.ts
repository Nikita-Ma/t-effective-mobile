import {NgModule} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {RegisterComponent} from './register.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import { RegisterDirective } from './register.directive';
import { RegisterPipe } from './register.pipe';


@NgModule({
  declarations: [
    RegisterComponent,
    RegisterDirective,
    RegisterPipe
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
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule {
}
