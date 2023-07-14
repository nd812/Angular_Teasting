import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  loginForm = new FormGroup({
    name:new FormControl('',[Validators.required, Validators.pattern('[a-zA-z]+$')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    phoneNumber:new FormControl('',[Validators.required,Validators.maxLength(15), Validators.pattern('[0-9]+$')]),
    gender:new FormControl('male',[Validators.required]),
    dob: new FormControl('', [Validators.required, this.validateDateOfBirth]),
    city:new FormControl('',[Validators.required]),
    hobby:new FormControl('',[Validators.required]),
    agree:new FormControl('',[Validators.required]),

  }) 

  loginUser(){
    console.warn(this.loginForm.value);
  }

 get name(){
    return this.loginForm.get('name')
  }

  get password(){
    return this.loginForm.get('password')
  }
  
  get email(){
    return this.loginForm.get('email')
  }
  get gender() {
    return this.loginForm.get('gender');
  }
  
  get dob() {
    return this.loginForm.get('dob');
  }
  
  get city() {
    return this.loginForm.get('city');
  }
  
  get agree() {
    return this.loginForm.get('agree');
  }
 
  get phoneNumber() {
    return this.loginForm.get('phoneNumber');

}
  get hobby() {
    return this.loginForm.get('hobby');
}


validateDateOfBirth(control: FormControl): { [key: string]: any } | null {
  const dateOfBirth = new Date(control.value);
  const age = this.calculateAge(dateOfBirth);

  if (isNaN(dateOfBirth.getTime()) || age < 18) {
    return { 'invalidDateOfBirth': true };
  }

  return null;
}

calculateAge(birthday: Date) {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}


}

