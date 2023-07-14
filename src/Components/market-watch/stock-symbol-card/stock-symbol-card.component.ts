import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stock-symbol-card',
  templateUrl: './stock-symbol-card.component.html',
  styleUrls: ['./stock-symbol-card.component.scss']
})
export class StockSymbolCardComponent {
  @Input() dataIndex!: number;
  @Input() name!: string;
  @Input() price!: number;
  @Input() symbol!: string;


}
