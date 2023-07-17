import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketWatchService {


  detailedList: any[] = [];

  stockListChanged = new EventEmitter<{ price: number, symbol: string }[]>
  detailedListChanged = new EventEmitter<any[]>
  stock_list: {
    symbol: string,
    price: number
  }[] = [];
  top100StockSymbols = [
    "V",

    "AAPL",
    "MSFT",
    "AMZN",
    "GOOGL",
    "FB",
    "JPM",
    "WMT",
    "UNH",
    "TSLA",
    "BRK.A",
    "BAC",
    "V",
    "PG",
    "INTC",
    "VZ",
    "MA",
    "UNP",
    "KO",
    "HD",
    "COST",
    "XOM",
    "CVX",
    "WFC",
    "MMM",
    "CSCO",
    "GE",
    "PG&E",
    "PFE",
    "UNH",
    "ADP",
    "NFLX",
    "ABBV",
    "DHR",
    "TGT",
    "PYPL",
    "MO",
    "UPS",
    "CVS",
    "VZ",
    "LOW",
    "RTN",
    "HON",
    "MRK",
    "IBM",
    "WBA",
    "GS",
    "JNJ",
    "NKE",
    "CRM",
    "DAL",
    "DAL",
    "DAL",
  ];

  constructor(private http: HttpClient) { }

  marketSymbolsData(): Observable<any> {
    // return this.http.get('https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=MRYyOChJicZDi8Wfj7twgYg98IwqY7zLOOerRHJy').pipe(
    //   // catchError()

    // );
    return this.http.get('../assets/dataset.json')
  }
  add_to_stock_list(symbol: string) {
    this.get_LTP_from_symbol(symbol).subscribe((data) => {
      // console.log("data arrived : ", data);

      this.stock_list.push({
        symbol: data.data[0].ticker,
        price: data.data[0].price
      });
      // console.log(" updated  list 1 : ", this.stock_list);

      this.detailedList.push({ ...data.data[0] })
      // console.log(" updated  list 1 : ", this.detailedList);

      this.stockListChanged.emit(this.stock_list);
      this.detailedListChanged.emit(this.detailedList)



    })

  }
  get_LTP_from_symbol(symbol: string): Observable<any> {

    // let url = `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=MRYyOChJicZDi8Wfj7twgYg98IwqY7zLOOerRHJy`


    let url = `../assets/singleStock.json`
    return this.http.get(url);

  }
  getDataFromDataSet(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.log(error);
    }
    return this.http.get('/assets/datasets.json');
  }
  removeItem(index: number) {
    this.stock_list.splice(index, 1);
    this.detailedList.splice(index, 1);


  }
  updateStocks(data: any) {

    this.stock_list = [];
    this.detailedList = [];

    for (let stock of data.data) {
      this.stock_list.push({
        symbol: stock.ticker,
        price: stock.price
      })
      this.detailedList.push({ ...stock })
    }
    this.stockListChanged.emit(this.stock_list);
    this.detailedListChanged.emit(this.detailedList)


  }
  getData() {
    return {
      detailedList: this.detailedList,
      stock_list: this.stock_list

    }
  }



}
