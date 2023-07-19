import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MarketWatchService } from 'src/Services/market-watch.service';

interface Order {
  price: number;
  volume: number;
}

@Component({
  selector: 'app-market-depth',
  templateUrl: './market-depth.component.html',
  styleUrls: ['./market-depth.component.scss']
})

export class MarketDepthComponent implements OnInit {

  price?: number;
  index!: number;
  symbol?: string;
  stockSymbol!: string;
  buyers!: Order[];
  sellers!: Order[];
  showLimitedDepth: boolean = true;
  timeGap: number = 3;







  constructor(private marketWatchService: MarketWatchService, private http: HttpClient) {

  }

  ngOnInit(): void {

    if (this.marketWatchService.activeElementIndex != -1) {
      this.index = this.marketWatchService.activeElementIndex;
      this.price = this.marketWatchService.stock_list[this.index].price
      this.symbol = this.marketWatchService.stock_list[this.index].symbol
      this.generateBuyersAndSellers(this.price, 5.50, 5, 1000);
      this.startUpdateData()


    }

    this.index = this.marketWatchService.activeElementIndex;
    this.marketWatchService.activeElementChangeEvent.subscribe((data: number) => {
      this.index = this.marketWatchService.activeElementIndex;
      if (this.index != -1) {
        this.price = this.marketWatchService.stock_list[this.index].price
        this.symbol = this.marketWatchService.stock_list[this.index].symbol
        console.log(this.price);

      }
    })



  }
  generateBuyersAndSellers(lastTradePrice: number, priceRange: number, numBuyersSellers: number, maxQuantity: number): void {
    this.buyers = [];
    this.sellers = [];

    for (let i = 0; i < numBuyersSellers; i++) {
      const buyerPrice = this.roundToTwoDecimalPlaces(this.roundToNearestIncrement((Math.random() * priceRange + (lastTradePrice - priceRange)), 0.05));
      const buyerVolume = Math.floor(Math.random() * (maxQuantity + 1));
      const buyer: Order = { price: buyerPrice, volume: buyerVolume };
      this.buyers.push(buyer);

      const sellerPrice = this.roundToTwoDecimalPlaces(this.roundToNearestIncrement((Math.random() * priceRange + lastTradePrice), 0.05));
      const sellerVolume = Math.floor(Math.random() * (maxQuantity + 1));
      const seller: Order = { price: sellerPrice, volume: sellerVolume };
      this.sellers.push(seller);
    }
    this.buyers.sort((a, b) => b.price - a.price)
    this.sellers.sort((a, b) => a.price - b.price)


  }
  roundToNearestIncrement(value: number, increment: number): number {
    return Math.round(value / increment) * increment;
  }
  roundToTwoDecimalPlaces(value: number): number {
    return Math.round(value * 100) / 100;
  }
  showMarketDepth() {
    this.showLimitedDepth = true;

  }
  showDepthScalper() {
    this.showLimitedDepth = false;

  }
  removeStockFromList() {
    console.log("remove  is called ");

    if (this.index != -1)
      this.marketWatchService.removeItem(this.index);


  }

  startUpdateData(): void {

    setInterval(() => {
      console.log("start update is called : ");

      if (this.marketWatchService.stock_list.length > 0) {

        this.updateData();

        if (this.price)
          this.generateBuyersAndSellers(this.price, 5.50, 5, 1000);
      }
    }, this.timeGap * 1000);
  }
  updateData(): void {


    if (this.symbol && this.index != -1) {
      console.log("index : ", this.index);

      this.fetchData(this.symbol).subscribe((response) => {
        if (this.index != -1) {
          this.marketWatchService.stock_list[this.index].price = response.data[0].price;
          this.marketWatchService.detailedList[this.index].price = response.data[0].price;
          this.marketWatchService.emitUpdateEvent()
          
        }

        // this.marketWatchService.updateStocks(response);
      });
    }


  }
  fetchData(symbol: string): Observable<any> {
    console.log();

    // const url = `https://api.stockdata.org/v1/data/quote?symbols=${allSymbols}&api_token=MRYyOChJicZDi8Wfj7twgYg98IwqY7zLOOerRHJy`;
    let url = `../assets/singleStock.json`
    // let url = `../assets/singleStock.json`
    return this.http.get(url);
  }



}


