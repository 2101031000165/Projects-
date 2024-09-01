import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder,private http: HttpClient) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],        
      email: ['', [Validators.required, Validators.email]],
      password_hash: ['', [Validators.required]]
     
    });
  }

  onSubmit(value) {
    console.log('value: ', value);
    if (this.registerForm.valid) {

      // Send the form data as JSON
      this.http.post('http://localhost:3000/user/register', value).subscribe(
        response => {
          console.log('Success!', response);
        },
        error => {
          console.error('Error!', error);
        }
      );
    }
  }
}
