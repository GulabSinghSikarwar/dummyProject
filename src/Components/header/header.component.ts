import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import {startWith, map} from 'rxjs/operators';
import { MarketWatchService } from 'src/Services/market-watch.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  enteredSymbol!: FormGroup;
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
  filteredSymbols !:Observable<string [] >;
  

constructor(private marketWatchServeice:MarketWatchService){

}


  get_LTP_from_Symbol() {
 
    
    this.marketWatchServeice.add_to_stock_list(this.enteredSymbol.value['symbol'])

    




  }
  ngOnInit(): void {
    this.enteredSymbol = new FormGroup({
      'symbol': new FormControl(null)
    });
  
    this.filteredSymbols = this.enteredSymbol.get('symbol')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '') as string[])
    );
  }
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.top100StockSymbols.filter(symbol => this._normalizeValue(symbol).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toUpperCase().replace(/\s/g, '');
  }
 



}
