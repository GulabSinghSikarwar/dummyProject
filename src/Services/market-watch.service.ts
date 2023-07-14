import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketWatchService implements OnInit {

 
 

  constructor(private http: HttpClient) { }
  ngOnInit(): void {


  }

  marketSymbolsData():any{

    return this.http.get('https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=MRYyOChJicZDi8Wfj7twgYg98IwqY7zLOOerRHJy');


  }


}
