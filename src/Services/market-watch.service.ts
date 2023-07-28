import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { AuthService } from './AuthService/auth-service.service';
//  import {} from '@angular/'
@Injectable({
  providedIn: 'root'
})
export class MarketWatchService {


  detailedList: {
    Currency: string;
    DayChange: number;
    DayHigh: number;
    DayLow: number;
    DayOpen: number;
    ExchangeLong: null | string;
    ExchangeShort: null | string;
    ID: string;
    IsExtendedHoursPrice: boolean;
    MICCode: string;
    MarketCap: null | number;
    Name: string;
    PreviousClosePrice: number;
    Price: number;
    Ticker: string;
    Volume: number;
    Week52High: number;
    Week52Low: number;
  }[] = [];

  stockListChanged = new EventEmitter<{ price: number, symbol: string }[]>
  detailedListChanged = new EventEmitter<any[]>
  stock_list: { symbol: string, price: number }[] = [];
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
  activeElementIndex: number = -1;
  activeElementChangeEvent = new EventEmitter<number>();



  constructor(private http: HttpClient, private authService: AuthService,) { }

  addStockToWatchList(symbol: string, watchlistId: string): Observable<any> {



    let url = `http://localhost:8000/api/watchlist/${watchlistId}`
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${this.authService.token}`,
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Credentials': 'true'

    // });

    // return this.http.post(url, { stockSymbol: symbol }, { headers });
    return this.http.post(url, { stockSymbol: symbol } );




  }

  add_to_stock_list(stockData: any) {
    this.stock_list.push({
      symbol: stockData.Ticker,
      price: stockData.Price,

    });


    this.detailedList.push({ ...stockData })


    this.stockListChanged.emit(this.stock_list);
    this.detailedListChanged.emit(this.detailedList)


  }
  get_LTP_from_symbol(symbol: string): Observable<any> {

    let url = `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=MRYyOChJicZDi8Wfj7twgYg98IwqY7zLOOerRHJy`


    // let url = `../assets/singleStock.json`
    return this.http.get(url);

  }

  removeItem(index: number) {
    console.log("remove service is called ");

    this.stock_list.splice(index, 1);
    this.detailedList.splice(index, 1);
    this.activeElementIndex++;
    if (this.activeElementIndex >= this.stock_list.length)
      this.activeElementIndex = -1;



    this.activeElementChangeEvent.emit(this.activeElementIndex)


  }
  removeItemFromWatchlist(watchlistId: string, stockId: string): Observable<any> {
    let url = `http://localhost:8000/api/watchlist/${watchlistId}/${stockId}`
    console.log("watchlistId : ", watchlistId, " stockId : ", stockId);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true'

    });



    return this.http.delete(url, { headers })

  }
  updateStocks(data: any) {

    this.stock_list = [];
    this.detailedList = [];

    for (let stock of data) {
      this.stock_list.push({
        symbol: stock.Ticker,
        price: stock.Price
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
  updateActiveElementIndex(index: number) {

    this.activeElementIndex = index;
    this.activeElementChangeEvent.emit(index)



  }
  emitUpdateEvent() {
    this.activeElementChangeEvent.emit(this.activeElementIndex);

  }
  haveStocks(stockId: string): boolean {

    let result = false;
    console.log(" detailed before route  :", this.detailedList);

    if (this.detailedList.length > 0) {
      for (let stock of this.detailedList) {
        if (stock.ID === stockId) {
          console.log("id matched ");

          result = true;

        }
      }
    }
    return result;

  }
  shouldAdd(symbol: string) {

    let result = true;

    for (let stock of this.detailedList) {
      if (stock.Ticker === symbol) {
        result = false;
        break;


      }

    }
    return result
  }



}
