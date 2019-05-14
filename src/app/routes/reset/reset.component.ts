import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  form: FormGroup;
  email: string;
  password: string;
  confirm: string;
  code: string;
  isWorking = false;
  constructor(
    private authService: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.code = this.route.snapshot.queryParams.oobCode;
    this.form = new FormGroup({
      password: new FormControl(this.password, [Validators.required]),
      confirm: new FormControl(this.confirm, [Validators.required, matchPassword(this)])
    });
  }
  reset() {
    
    console.log(this.code);
    debugger;
    this.authService.auth.confirmPasswordReset(this.code, this.form.controls.password.value).then(() => {
      this.isWorking = false;
      this.router.navigateByUrl('dashboard');
    }).catch((error) => {
      debugger;
      this.isWorking = false;
      console.log(error);
    });
  }

}
function matchPassword(context): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return control.value && control.value === context.form.controls.password.value ? null : { 'match': true };
  };
}