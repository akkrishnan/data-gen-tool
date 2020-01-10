import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Routes, RouterModule } from '@angular/router';


import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
// import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Observable } from 'rxjs';
import { take, startWith, map } from 'rxjs/operators';
// import { CustomValidatorsService } from './custom-validators.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  loginFormGroup: FormGroup;
  post: any = '';

  loginErrMessage = 'Please enter the username';
  pwdErrMessage = 'Please enter the password';

  ngOnInit() {
    this.createLoginForm();
  }

  constructor(
    // private route: ActivatedRoute,
    // private router: Router
  ) { }

  createLoginForm() {
    this.loginFormGroup = new FormGroup({
      loginText: new FormControl('', [Validators.required]),
      passwordText: new FormControl('', [Validators.required])
    });
  }

  validateTextField(param: string) {
    return this.loginFormGroup.get(param).hasError('required');
  }

  validateLogin() {
    return this.validateTextField('loginText') ? this.loginErrMessage : '';
  }

  validatePass() {
    return this.validateTextField('passwordText') ? this.pwdErrMessage : '';
  }

  onSubmit() {
    // this.router.navigate(['/home']);
  }

}
