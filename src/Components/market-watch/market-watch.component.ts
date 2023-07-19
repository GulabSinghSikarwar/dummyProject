import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MarketWatchService } from 'src/Services/market-watch.service';
 

@Component({
  selector: 'app-market-watch',
  templateUrl: './market-watch.component.html',
  styleUrls: ['./market-watch.component.scss']
})
export class MarketWatchComponent implements OnInit, OnDestroy {
  detailedList: any[] = [];
  stockList: { symbol: string, price: number }[] = [];
  stockListSubscription!: Subscription;
  detailedListSubscription!: Subscription;
  temp = true;

  constructor(public market_watch_Service: MarketWatchService) {
     
  }

  ngOnInit(): void {
    this.stockListSubscription = this.market_watch_Service.stockListChanged.subscribe(
      (stockList: { symbol: string, price: number }[]) => {
        // if(this.temp){
        this.stockList = stockList;
        // }
        this.temp = false;
      }
    );

    this.detailedListSubscription = this.market_watch_Service.detailedListChanged.subscribe(
      (detailedList: any[]) => {
        this.detailedList = detailedList;
      }
    );

    // for (let stock of this.market_watch_Service.detailedList) {
    //   this.detailedList.push({ ...stock });
    // }

    // for (let stock of this.market_watch_Service.stock_list) {
    //   this.stockList.push({ ...stock });
    // }
  }

  ngOnDestroy(): void {
    this.stockListSubscription.unsubscribe();
    this.detailedListSubscription.unsubscribe();
  }
}
