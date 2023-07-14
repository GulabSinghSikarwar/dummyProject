import { Component } from '@angular/core';
import { MarketWatchService } from 'src/Services/market-watch.service';

@Component({
  selector: 'app-market-watch',
  templateUrl: './market-watch.component.html',
  styleUrls: ['./market-watch.component.scss']
})
export class MarketWatchComponent {

  marketData!: any;


  constructor(private market_watch_Service: MarketWatchService) {

    market_watch_Service.marketSymbolsData().subscribe((data: any) => {
      console.log(data);
      this.marketData = data;



    })



  }

}
