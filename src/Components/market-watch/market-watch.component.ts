import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MarketWatchService } from 'src/Services/market-watch.service';
import { UpdateMarketDataService } from 'src/Services/update-market-data.service';

@Component({
  selector: 'app-market-watch',
  templateUrl: './market-watch.component.html',
  styleUrls: ['./market-watch.component.scss']
})
export class MarketWatchComponent implements OnInit {
  detailedList: any[] = [];
  stockList: any[] = [];






  constructor(private market_watch_Service: MarketWatchService, private updateMarketData: UpdateMarketDataService) {





  }trackByIndex(index: number, item: any): number {
    return index;
  }
  
  trackBySymbolIndex(index: number, item: any): string {
    return item.symbol;
  }
  
  ngOnInit(): void {
    let data = this.market_watch_Service.getData();
    this.detailedList = data.detailedList;
    this.stockList = data.stock_list;


    this.market_watch_Service.detailedListChanged.subscribe((updatedDetailedList) => {
      this.detailedList = updatedDetailedList;

    })
    this.market_watch_Service.stockListChanged.subscribe((updatedStockList) => {
      this.stockList = updatedStockList;

    })







  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("change is occured : ",changes);

  //   let n =this.market_watch_Service.stock_list.length;
  //   console.log(" n : ",n);


  //   if (this.market_watch_Service.stock_list.length > 0) {
  //     this.updateMarketData.startUpdateData()

  //   }
  // }


}
