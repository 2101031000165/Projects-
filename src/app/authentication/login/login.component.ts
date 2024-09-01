import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  recoverPasswordForm:  FormGroup;
  isRecovering: boolean = false;

  constructor(private fb: FormBuilder, private http : HttpClient,private router : Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.recoverPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  onSubmitLogin(value) {
    console.log('value: ', value);
    const userId = localStorage.getItem('userid');
    if (this.loginForm.valid) {
      
      
      console.log(this.loginForm.value);
      this.http.post('http://localhost:3000/user/login', value).subscribe(
        response => {
          console.log('Success!', response);

          localStorage.setItem('email' , response['email'])
          localStorage.setItem('token' , response['token'])
          localStorage.setItem('userid' , response['userid'])
          this.router.navigate([`/user/dashboard`])
        },
        error => {
          console.error('Error!', error);
        }
      );
    }
  }

  onSubmitRecover(value) {
    if (this.recoverPasswordForm.valid) {
      // Handle password recovery logic

      
      console.log(this.recoverPasswordForm.value);
    }
  }

  toggleRecoverPassword() {
    this.isRecovering = !this.isRecovering;
  }
}
