import { Component, Input ,OnInit} from '@angular/core';
import { MarketWatchService } from 'src/Services/market-watch.service';

@Component({
  selector: 'app-stock-symbol-card',
  templateUrl: './stock-symbol-card.component.html',
  styleUrls: ['./stock-symbol-card.component.scss']
})
export class StockSymbolCardComponent  implements OnInit {
  @Input() dataIndex!: number;
  @Input() name!: string;
  @Input() price!: number;
  @Input() symbol!: string;

  constructor(private marketWatchService: MarketWatchService) {

  }
  updateActiveElementIndex() {
    console.log("update active index called ");
    console.log(" index : ", this.dataIndex);
    
    this.marketWatchService.updateActiveElementIndex(this.dataIndex)
  }
  ngOnInit(): void {
      console.log("name : ",this.name);
      
  }


}
