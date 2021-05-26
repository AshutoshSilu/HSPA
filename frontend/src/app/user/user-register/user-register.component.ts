import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.registrationForm= new FormGroup({
      userName: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.email,Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    }, this.passwordMatchingValidatior);
  }

  passwordMatchingValidatior(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    {notmatched: true};
  }
  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }
  onSubmit() {
    console.log(this.registrationForm);
  }
}
