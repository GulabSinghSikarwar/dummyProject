import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MarketWatchService } from './market-watch.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateMarketDataService {
  private timeGap = 3; // Time interval in seconds

  constructor(private http: HttpClient, private marketWatchService: MarketWatchService) {
    this.startUpdateData();
  }

  fetchData(allSymbols: string): Observable<any> {
    console.log(allSymbols);

    // const url = `https://api.stockdata.org/v1/data/quote?symbols=${allSymbols}&api_token=MRYyOChJicZDi8Wfj7twgYg98IwqY7zLOOerRHJy`;
    let url = `../assets/dataset.json`
    // let url = `../assets/singleStock.json`
    return this.http.get(url);
  }

  updateData(allSymbols: string): void {
    console.log(" symbols  passed : ", allSymbols);

    this.fetchData(allSymbols).subscribe((response) => {
      this.marketWatchService.updateStocks(response);
    });
  }

  startUpdateData(): void {

    setInterval(() => {
      console.log("start update is called : ");
      if (this.marketWatchService.stock_list.length > 0) {
        const allSymbols: string = this.generateAllSymbolString();
        this.updateData(allSymbols);
      }
    }, this.timeGap * 1000);
  }

  generateAllSymbolString(): string {
    let allSymbol: string = "";
    console.log( " stock list :" ,this.marketWatchService.stock_list);
    
    const n: number = this.marketWatchService.stock_list.length;

    for (let i = 0; i < n; i++) {
      console.log("symbol:-->  ",this.marketWatchService.stock_list[i].symbol);
      
      allSymbol += this.marketWatchService.stock_list[i].symbol;

      if (i !== n - 1) {
        allSymbol += ",";
      }
    }

    console.log(" symbol string :  in prod  : ",allSymbol);
    
    return allSymbol;
  }
}
