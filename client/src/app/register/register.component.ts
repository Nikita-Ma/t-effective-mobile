import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle('Register')
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

  /*
  * @HowImprove:
  * 1. Catching specific error (incorrect email and etc.).
  * 2. Auto fetch if we have account data in localStorage.
  * 3. Compare localStorage password with this enter.
  * --------------------------------------------------
  * p.s. You can see any realization auth in my GH account.
  * */

  public sendFormData(): string | void {
    console.log(this._email, this._password)
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

  protected readonly Math = Math;
}
