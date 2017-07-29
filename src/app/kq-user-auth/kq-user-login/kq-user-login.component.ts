import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-kq-user-login',
  templateUrl: './kq-user-login.component.html',
  styleUrls: ['./kq-user-login.component.css']
})
export class KqUserLoginComponent implements OnInit {

  private registerForm: FormGroup;
  private loginForm: FormGroup;
  private isPasswordMismatch: boolean = false;
  private isRegSuccess: boolean = false;
  private isRegError: boolean = false;

  private isLoginError: boolean = false;
  private isLoginSuccess: boolean = false;

  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    });

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember_me: ['']
    })
  }

  submitRegisterForm() {
    if (this.registerForm.value.password != this.registerForm.value.confirm_password) {
      this.isPasswordMismatch = true;
    } else {
      this.authService.register(this.registerForm.value)
        .subscribe(
          (res) => {
            if (res.status && res.data) {
              this.isRegSuccess = true
              this.isRegError = false;
              this.loginForm.reset();
            } else {
              this.isRegError = true;
              this.isRegSuccess = false;
            }
          },
          (err) => {
            this.isRegSuccess = false;
            this.isRegError = true
            console.log(err);
          }
        )
    }
  }

  submitLoginForm() {
    this.authService.login(this.loginForm.value)
      .subscribe(
        (res) => {
          if (res.data && res.status) {
            this.isLoginSuccess = true;
            this.isLoginError = false;
            this.loginForm.reset();
          } else {
            this.isLoginError = true;
            this.isLoginSuccess = false;
          }
        },
        (err) => {
          this.isLoginSuccess = false;
          this.isLoginError = true;
        }
      )
  }


}
