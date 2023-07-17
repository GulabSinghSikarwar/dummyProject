import { Component } from '@angular/core';
import { MarketWatchService } from 'src/Services/market-watch.service';

@Component({
  selector: 'app-market-watch',
  templateUrl: './market-watch.component.html',
  styleUrls: ['./market-watch.component.scss']
})
export class MarketWatchComponent {

  marketData!: any;
  available_stocks!: {
    symbol: string,
    price: number,
  }[];

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


  constructor(private market_watch_Service: MarketWatchService) {

    market_watch_Service.marketSymbolsData().subscribe((data: any) => {

      console.log("data is here : ", data);

      console.log(data.data);
      this.marketData = data.data;
    })

    this.available_stocks = [...this.market_watch_Service.stock_list];





  }

}
