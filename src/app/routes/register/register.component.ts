import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  email: string;
  password: string;
  confirm: string;
  isWorking = false;
  constructor(
    private authService: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(this.email, [Validators.required, domain()]),
      password: new FormControl(this.password, [Validators.required]),
      confirm: new FormControl(this.confirm, [Validators.required, matchPassword(this)])
    });
  }
  register() {
    this.authService.auth.createUserWithEmailAndPassword(this.form.controls.email.value, this.form.controls.password.value).then(() => {
      this.isWorking = false;
      this.router.navigateByUrl('kits');
    }).catch((error) => {
      this.isWorking = false;
      console.log(error);
    });
  }

}

function domain(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return control.value && control.value.includes('@talentics.mx') ? null : { 'domain': true };
  };
}
function matchPassword(context): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return control.value && control.value === context.form.controls.password.value ? null : { 'match': true };
  };
}