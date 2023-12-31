import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService/auth-service.service';
import { WatchlistService } from 'src/Services/WatchlistService/watchlist.service';
import { MarketWatchService } from 'src/Services/market-watch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sampleProject';
  constructor(private marketWatchService: MarketWatchService, private authService: AuthService, private router: Router, private watchlistService: WatchlistService) {

  }
  ngOnInit(): void {
    let token: string = this.authService.getAuthToken() || ''


    console.log(" token :  : ",token);
    
    if (token !== '' || token)
      this.authService.setToken(token)


    else {
      

      this.router.navigate(['/login'])
    }



    let watchlistId = this.watchlistService.watchlist?.ID
    console.log(" wid : ", watchlistId);


    if (!watchlistId) {
      console.log("here  we dont have id ");

      this.watchlistService.initiateUser(token).subscribe(
        (response: any) => {
          console.log("response L ", response);

          // this.watchlistService.initiateUser(response.result[0])
          // update user in marketWatch service 
          this.watchlistService.setWatchlist(response.result[0])
          // update watch list id in the wtachlist service 
          this.marketWatchService.updateStocks(response.allStocks)

          let watchlistId = this.watchlistService.watchlist?.ID;
          let location = `watchlist/${watchlistId}`
          console.log("location: ", location);

          this.router.navigate([location])


        }
        , (error) => {
          // console.log("Error Response:", error , " object : ", );
          if (error.error.message === 'Invalid token claim') {
            console.log( "err message : ", error.message);

            this.authService.logout()
            this.router.navigate(['/login'])
          }

        }

      )

    }

    let path = `/${watchlistId}`;
    

    console.log("path: ", path);


    // this.router.navigate([`${path}`])




  }
}
