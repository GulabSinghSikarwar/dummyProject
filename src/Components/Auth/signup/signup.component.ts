import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from 'src/Services/AuthService/auth-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  error?: string
  signupForm = new FormGroup({

    "name": new FormControl(''),
    "email": new FormControl(''),
    "password": new FormControl(''),
    "confirmPassword": new FormControl('')
  })

  constructor(private router: Router, private authService: AuthService) {

  }
  submitSinup() {

    let body = {
      name: this.signupForm.get('name')!.value!,
      email: this.signupForm.get('email')!.value!,
      password: this.signupForm.get('password')!.value!,
      confirmPassword: this.signupForm.get('confirmPassword')!.value!,
    }

    this.authService.signup(body).subscribe(
      (response) => {
        console.log("SIGNUP  RESP :",response);
        

        this.router.navigate(['/login'])

      },
      (errMessage) => {
        //   error handeling 
        this.error = errMessage.message
      }

    )


  }

}
