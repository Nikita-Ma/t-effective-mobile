import {Component} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  constructor(
    private _snackBar: MatSnackBar,
    private titleService: Title,
    private router: Router
  ) {
    this.titleService.setTitle('Log in')
  }


  public _email = ''
  public _password = ''

  emailFormControl = new FormControl(this._email, [Validators.required, Validators.email]);
  passwordFormControl = new FormControl(this._password, [Validators.required]);

  public saveFormData(e: any) {
    if (e.target.name === 'password') {
      this._password = e.target.value
    } else {
      this._email = e.target.value
    }
  }

  public sendFormData(): string | void {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!this._password.length || !regex.test(this._email)) {
      console.error('Enter correct data!')
      return
    } else if (localStorage.getItem('account-data')) {
      this.router.navigate(['/posts'])
    }

    localStorage.setItem('account-data', `${[this._email, this._password]}`)
    this.router.navigate(['/posts'])
  }

  ngOnInit() {
  }
}

