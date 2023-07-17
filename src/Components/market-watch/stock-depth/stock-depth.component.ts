import { Component } from '@angular/core';
import { MarketWatchService } from 'src/Services/market-watch.service';

@Component({
  selector: 'app-stock-depth',
  templateUrl: './stock-depth.component.html',
  styleUrls: ['./stock-depth.component.scss']
})
export class StockDepthComponent {
  
  symbol :String ="GOOGL";
  price :number=156
  constructor(private marketWatchService: MarketWatchService){

  }

}
