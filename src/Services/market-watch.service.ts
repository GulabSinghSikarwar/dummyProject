import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketWatchService {

  constructor(private http: HttpClient) { }

  marketSymbolsData(): Observable<any> {
    // return this.http.get('https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=MRYyOChJicZDi8Wfj7twgYg98IwqY7zLOOerRHJy').pipe(
    //   // catchError()

    // );
    return  this.http.get('../assets/dataset.json')
  }

  getDataFromDataSet(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.log(error);
    }
    return  this.http.get('/assets/datasets.json');
  }
  
}
