import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup
  user: User;
  userSubmitted : boolean;
  constructor(private fb:FormBuilder,
    private userService: UserServiceService,
    private alertify: AlertifyService ) { }

  ngOnInit(): void {
    //this.registrationForm= new FormGroup({
    //userName: new FormControl(null,Validators.required),
    //email: new FormControl(null,[Validators.email,Validators.required]),
    //password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //confirmPassword: new FormControl(null, [Validators.required]),
     //mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    //}, this.passwordMatchingValidatior);
  this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registrationForm= this.fb.group({
    userName:[null,Validators.required],
    email: [null,[Validators.email,Validators.required]],
    password: [null, [Validators.required, Validators.minLength(8)]],
    confirmPassword: [null, [Validators.required]],
    mobile: [null, [Validators.required, Validators.maxLength(10)]]
    },{Validators:this.passwordMatchingValidatior});
  }

  passwordMatchingValidatior(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    {notmatched: true};
  }
  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }
  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.userSubmitted=true;
    if(this.registrationForm.valid){
    //this.user=Object.assign(this.user,this.registrationForm.value);
    this.userService.addUsers(this.userData());
    this.registrationForm.reset();
    this.userSubmitted=false;
    this.alertify.success('Congrats Your Data Saved Successfully');
     }
     else{
      this.alertify.error('Kindly Provide the Required Fields');
     }

  }
  userData(): User {
    return this.user = {
      userName:this.userName.value,
      email:this.email.value,
      password:this.password.value,
      mobile:this.mobile.value
    }

  }


}
