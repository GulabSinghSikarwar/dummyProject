import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from 'src/Services/AuthService/auth-service.service';
import { debounceTime } from 'rxjs/operators'; // Import the debounceTime operator

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  error?: string
  signupForm = new FormGroup({

    "name": new FormControl('', [Validators.required]),
    "email": new FormControl('', [Validators.required, Validators.email]),
    "password": new FormControl('', [Validators.required]),
    "confirmPassword": new FormControl('', [Validators.required, this.checkConfirmPassword])
  })

  constructor(private router: Router, private authService: AuthService) {
    this.signupForm.get('confirmPassword')?.valueChanges
    .pipe(debounceTime(300)) // Add a debounce time of 300ms to avoid frequent validations
    .subscribe(() => {
      this.signupForm.get('confirmPassword')?.updateValueAndValidity(); // Trigger validation on every keystroke
    });
  }
  checkConfirmPassword(control: FormControl): { [key: string]: any } | null {
    const passwordValue = control.parent?.get('password')?.value;
    const confirmPasswordValue = control.value;

    if (passwordValue !== confirmPasswordValue) {
      return { confirmPasswordMismatch: true };
    }

    return null; // Return null if the validation passes
  }
  submitSinup() {
    console.log(this.signupForm);

    let body = {
      name: this.signupForm.get('name')!.value!,
      email: this.signupForm.get('email')!.value!,
      password: this.signupForm.get('password')!.value!,
      confirmPassword: this.signupForm.get('confirmPassword')!.value!,
    }

    this.authService.signup(body).subscribe(
      (response) => {
        console.log("SIGNUP  RESP :", response);


        this.router.navigate(['/login'])

      },
      (errMessage) => {
        //   error handeling 
        this.error = errMessage.message
      }

    )


  }

}
