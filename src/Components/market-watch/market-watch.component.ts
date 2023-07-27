import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WatchlistService } from 'src/Services/WatchlistService/watchlist.service';
import { MarketWatchService } from 'src/Services/market-watch.service';
import { ActivatedRoute } from '@angular/router';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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
  error?: string

  constructor(public market_watch_Service: MarketWatchService, private watchlistService: WatchlistService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.stockListSubscription = this.market_watch_Service.stockListChanged.subscribe(
      (stockList: { symbol: string, price: number }[]) => {
        // if(this.temp){
        console.log("stocklist : ", stockList);

        this.stockList = [...stockList];
        // }
        this.temp = false;
      }
    );

    this.detailedListSubscription = this.market_watch_Service.detailedListChanged.subscribe(
      (detailedList: any[]) => {
        this.detailedList = [...detailedList];
        console.log("detailedlist  : ", detailedList);

      }
    );

    this.watchlistService.getAllStocksInWatchList(this.route.snapshot.params['watchlistId']).subscribe(
      (response) => {

        console.log("response : ", response);

        this.market_watch_Service.updateStocks(response.stocks)


      },
      (errorMessage) => {
        this.error = errorMessage.message

      }

    )
    this.market_watch_Service.activeElementChangeEvent.subscribe(() => {
      this.stockList = []
      this.stockList = [...this.market_watch_Service.stock_list]
      this.detailedList = []
      this.detailedList = [...this.market_watch_Service.detailedList]



    })


  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.market_watch_Service.detailedList, event.previousIndex, event.currentIndex);
  }

  ngOnDestroy(): void {
    this.stockListSubscription.unsubscribe();
    this.detailedListSubscription.unsubscribe();
  }
}
