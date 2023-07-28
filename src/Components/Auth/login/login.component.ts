import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService/auth-service.service';
import { WatchlistService } from 'src/Services/WatchlistService/watchlist.service';
import { MarketWatchService } from 'src/Services/market-watch.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error?: string

  loginForm = new FormGroup({

    "email": new FormControl('', [Validators.required, Validators.email]),
    "password": new FormControl('', [Validators.required])
  })

  constructor(private router: Router, private authService: AuthService,
    private watchlistService: WatchlistService,
    private marketWatchService: MarketWatchService) {

  }
  submitLogin() {
    let body = {
      email: this.loginForm.get("email")!.value!,
      password: this.loginForm.get("password")!.value!,
    }
    // controls.email.status
    console.log(" form : ");
    
    console.log(this.loginForm);


    this.authService.login(body).subscribe(
      (response: {
        status: string;
        token: string;
        user: {
          ID: string;
          name: string;
          password: string;
          email: string;
        };
        watchlist: {
          UserId: string;
          ID: string;
          stocks: string[];
        };
      },
      ) => {

        console.log("LOGIN RESP :", response);



        this.authService.setAuthToken(response.token)
        this.watchlistService.setWatchlist(response.watchlist)


        this.router.navigate([`watchlist/${response.watchlist.ID}`])
      },
      (errorMessage) => {
        // error Handeling 

        this.error = errorMessage.message


      }
    )

  }

}
