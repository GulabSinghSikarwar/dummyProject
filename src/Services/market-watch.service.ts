import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketWatchService {

  stock_list: {
    symbol: string,
    price: number
  }[] = [{
    symbol: "MSFT",
    price: 152
  }, {
    symbol: "GOOGL",
    price: 265
  },];
  top100StockSymbols = [
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

  getDataFromDataSet(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.log(error);
    }
    return this.http.get('/assets/datasets.json');
  }
  get_LTP_from_symbol(symbol: string): Observable<any> {

    let url = `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=MRYyOChJicZDi8Wfj7twgYg98IwqY7zLOOerRHJy`

    return this.http.get(url);

  }
  add_to_stock_list(symbol: string) {
    this.get_LTP_from_symbol(symbol).subscribe((data) => {
      this.stock_list.push({
        symbol,
        price: data.data[0].price
      });


    })

  }

}
/**
 * 
interface Order {
  price: number;
  volume: number;
}

function generateBuyersAndSellers(lastTradePrice: number, priceRange: number, numBuyersSellers: number, maxQuantity: number): { buyers: Order[], sellers: Order[] } {
  const buyers: Order[] = [];
  const sellers: Order[] = [];

  for (let i = 0; i < numBuyersSellers; i++) {
    const buyerPrice = parseFloat((Math.random() * priceRange + (lastTradePrice - priceRange)).toFixed(2));
    const buyerVolume = Math.floor(Math.random() * (maxQuantity + 1));
    const buyer: Order = { price: buyerPrice, volume: buyerVolume };
    buyers.push(buyer);

    const sellerPrice = parseFloat((Math.random() * priceRange + lastTradePrice).toFixed(2));
    const sellerVolume = Math.floor(Math.random() * (maxQuantity + 1));
    const seller: Order = { price: sellerPrice, volume: sellerVolume };
    sellers.push(seller);
  }

  return { buyers, sellers };
}

// Example usage
const lastTradePrice = 930.45;
const priceRange = 5.50;
const numBuyersSellers = 5;
const maxQuantity = 1000;

const { buyers, sellers } = generateBuyersAndSellers(lastTradePrice, priceRange, numBuyersSellers, maxQuantity);

// Print the generated buyers
console.log("Buyers:");
for (const buyer of buyers) {
  console.log(buyer);
}
console.log("Sellers:");
for (const buyer of sellers) {
  console.log(buyer);
}

 */