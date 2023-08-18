import {Component} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  constructor(
    private _snackBar: MatSnackBar,
    private titleService: Title
              ) {
    this.titleService.setTitle('Log in')
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}

