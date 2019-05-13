import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  form: FormGroup;
  isWorking = false;

  constructor(
    private authService: AngularFireAuth,
    private router: Router
    ) {}
  login() {
    this.isWorking = true;
    this.authService.auth.signInWithEmailAndPassword(this.form.controls.email.value, this.form.controls.password.value).then(() => {
      this.isWorking = false;
      this.router.navigateByUrl('kits');
    }).catch((error) => {
      this.isWorking = false;
      console.log(error);
    });
  }
  logout() {
    this.authService.auth.signOut();
  }
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(this.email, [Validators.required, domain()]),
      password: new FormControl(this.password, [Validators.required])
    });
  }

}


function domain(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return control.value && control.value.includes('@talentics.mx') ? null : { 'domain': true };
  };
}
