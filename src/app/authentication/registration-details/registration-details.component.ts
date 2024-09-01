import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrl: './registration-details.component.css'
})
export class RegistrationDetailsComponent {
  userForm: FormGroup;
  userid = localStorage.getItem('userid');
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      building: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      ZipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]], // Simple US Zip Code validation
      state: ['', Validators.required],
      Details_ID: this.userid,
      created_at: null
    });
  }

  onSubmit(): void {
    
      this.http.post('http://localhost:3000/user/registerDetails', this.userForm.value).subscribe(
        response => {
          console.log('Success!', response);
        },
       
      );
  
  }
}
