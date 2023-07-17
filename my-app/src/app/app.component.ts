// app.component.ts
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

function validateDateOfBirth(control: FormControl): { [key: string]: any } | null {
  const dateOfBirth = new Date(control.value);
  const age = calculateAge(dateOfBirth);

  if (isNaN(dateOfBirth.getTime()) || age < 18) {
    return { 'invalidDateOfBirth': true };
  }

  return null;
}

function calculateAge(birthday: Date) {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

<<<<<<< HEAD
function passwordsMatch(control: AbstractControl): { [key: string]: any } | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if (password !== confirmPassword) {
    control.get('confirmPassword')?.setErrors({ passwordsDoNotMatch: true });
    return { passwordsDoNotMatch: true };
=======
function restrictFutureDates(control: FormControl): { [key: string]: any } | null {
  const selectedDate = new Date(control.value);
  const currentDate = new Date();

  if (selectedDate > currentDate) {
    return { 'futureDateNotAllowed': true };
>>>>>>> a123587b2492e736d70614414542101a8b6caec8
  }

  return null;
}

<<<<<<< HEAD
=======
function passwordsMatch(control: AbstractControl): { [key: string]: any } | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  return password === confirmPassword ? null : { 'passwordsDoNotMatch': true };
}
>>>>>>> a123587b2492e736d70614414542101a8b6caec8

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  isFormSubmitted = false;
<<<<<<< HEAD
  tags: string[] = [];

  addTag() {
    const tagFormControl: AbstractControl | null = this.loginForm.get('tag');
  
    if (tagFormControl && tagFormControl.value) {
      const tagValue = (tagFormControl.value as string).trim();
  
      if (tagValue && this.tags.length < 3) {
        this.tags.push(tagValue);
        tagFormControl.setValue('');
        tagFormControl.markAsUntouched();
        
      }
    }
  }
  
  removeTag(tag: string) {
    const tagIndex = this.tags.indexOf(tag);

    if (tagIndex !== -1) {
      this.tags.splice(tagIndex, 1);
    }
  }

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern('[0-9]+$')]),
    gender: new FormControl('male', [Validators.required]),
    dob: new FormControl('', [Validators.required, validateDateOfBirth]),
    city: new FormControl('', [Validators.required]),
    hobby: new FormControl('', [Validators.required]),
    agree: new FormControl(false, [Validators.requiredTrue]),
    tag: new FormControl('', [Validators.maxLength(3)])
  }, { validators: passwordsMatch });
=======

  loginForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern('[0-9]+$')]),
      gender: new FormControl('male', [Validators.required]),
      dob: new FormControl('', [Validators.required, validateDateOfBirth, restrictFutureDates]),
      city: new FormControl('', [Validators.required]),
      hobby: new FormControl('', [Validators.required]),
      agree: new FormControl(false, [Validators.requiredTrue]),
    },
    { validators: passwordsMatch }
  );
>>>>>>> a123587b2492e736d70614414542101a8b6caec8

  constructor() {
    this.loginForm.controls.password.valueChanges.subscribe(() => {
      this.loginForm.controls.confirmPassword.updateValueAndValidity();
    });
  }

  loginUser() {
    this.isFormSubmitted = true;

    if (this.loginForm.valid) {
<<<<<<< HEAD
      console.log('Form value:', this.loginForm.value); 
      console.log('Tags:', this.tags); 
    
    
    }
  }

  getMaxDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

=======
      console.warn(this.loginForm.value);
      // Perform form submission or any other desired action
    }
  }

>>>>>>> a123587b2492e736d70614414542101a8b6caec8
  get name() {
    return this.loginForm.get('name');
  }

<<<<<<< HEAD
  get phoneNumber() {
    return this.loginForm.get('phoneNumber');
  }

  get email() {
    return this.loginForm.get('email');
  }

=======
>>>>>>> a123587b2492e736d70614414542101a8b6caec8
  get password() {
    return this.loginForm.get('password');
  }

<<<<<<< HEAD
  get confirmPassword() {
    return this.loginForm.get('confirmPassword');
=======
  get email() {
    return this.loginForm.get('email');
>>>>>>> a123587b2492e736d70614414542101a8b6caec8
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

<<<<<<< HEAD
=======
  get agree() {
    return this.loginForm.get('agree');
  }

  get phoneNumber() {
    return this.loginForm.get('phoneNumber');
  }

>>>>>>> a123587b2492e736d70614414542101a8b6caec8
  get hobby() {
    return this.loginForm.get('hobby');
  }

<<<<<<< HEAD
  get agree() {
    return this.loginForm.get('agree');
  }
  
  get tag() {
    return this.loginForm.get('tag');
=======
  get confirmPassword() {
    return this.loginForm.get('confirmPassword');
  }

  getMaxDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
>>>>>>> a123587b2492e736d70614414542101a8b6caec8
  }
}
