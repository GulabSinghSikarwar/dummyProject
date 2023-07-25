import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../AuthService/auth-service.service';

interface Watchlist {
  UserId: string
  ID: string
  Stocks: string[]
}


@Injectable({
  providedIn: 'root'
})

export class WatchlistService {

  watchlist?: Watchlist

  constructor(private http: HttpClient, private route: ActivatedRoute, private authService: AuthService) { }

  setWatchlist(watchlist: {
    UserId: string;
    ID: string;
    stocks: string[];
  }) {
    this.watchlist = {

      ID: watchlist.ID,
      Stocks: [...watchlist.stocks],
      UserId: watchlist.UserId

    }




  }
  addStockToWatchList(stockData: any) {

    this.watchlist?.Stocks.push(stockData.ID);

  }
  getAllStocksInWatchList(watchlistId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true'

    });
    return this.http.get(`http://localhost:8000/api/watchlist/${watchlistId}`, { headers })
  }

  getStockById(watchlistId: string, stockId: string): Observable<any> {
    let url = `http://localhost:8000/api/watchlist/${watchlistId}/${stockId}`

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true'

    });
    return this.http.get(url, { headers })
  }

  initiateUser(token: string) {
    let url = `http://localhost:8000/api/watchlist/`
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true'

    });
    return this.http.get(url, { headers })



  }

}
