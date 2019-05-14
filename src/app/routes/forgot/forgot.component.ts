import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  email: string;
  password: string;

  form: FormGroup;
  isWorking = false;

  constructor(
    private authService: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
    ) {}
  request() {
    this.isWorking = true;
    this.authService.auth.sendPasswordResetEmail(this.form.controls.email.value).then(() => {
      this.isWorking = false;
      this.snackBar.open('Código enviado', 'Ok', {
        duration: 2000
      });
      this.router.navigateByUrl('login');
    }).catch((error) => {
      this.isWorking = false;
      console.log(error);
    });
  }
  ngOnInit() {
    this.email = this.route.snapshot.queryParams.email;
    this.form = new FormGroup({
      email: new FormControl(this.email, [Validators.required, domain()])
    });
  }

}


function domain(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return control.value && control.value.includes('@talentics.mx') ? null : { 'domain': true };
  };
}
