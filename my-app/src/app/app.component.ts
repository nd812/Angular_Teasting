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

function restrictFutureDates(control: FormControl): { [key: string]: any } | null {
  const selectedDate = new Date(control.value);
  const currentDate = new Date();

  if (selectedDate > currentDate) {
    return { 'futureDateNotAllowed': true };
  }

  return null;
}

function passwordsMatch(control: AbstractControl): { [key: string]: any } | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  return password === confirmPassword ? null : { 'passwordsDoNotMatch': true };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  isFormSubmitted = false;

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

  constructor() {
    this.loginForm.controls.password.valueChanges.subscribe(() => {
      this.loginForm.controls.confirmPassword.updateValueAndValidity();
    });
  }

  loginUser() {
    this.isFormSubmitted = true;

    if (this.loginForm.valid) {
      console.warn(this.loginForm.value);
      // Perform form submission or any other desired action
    }
  }

  get name() {
    return this.loginForm.get('name');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get email() {
    return this.loginForm.get('email');
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

  get confirmPassword() {
    return this.loginForm.get('confirmPassword');
  }

  getMaxDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
