import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { WatchlistService } from 'src/Services/WatchlistService/watchlist.service';
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
  timeGap: number = 1;







  constructor(
    private router: Router,
    private watchlistService: WatchlistService,
    private marketWatchService: MarketWatchService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    if (this.marketWatchService.activeElementIndex != -1) {
      this.index = this.marketWatchService.activeElementIndex;
      this.price = this.marketWatchService.stock_list[this.index].price
      this.symbol = this.marketWatchService.stock_list[this.index].symbol
      this.generateBuyersAndSellers(this.price, 5.50, 5, 1000);
      this.startUpdateData()





    }
    else {

      this.route.params.subscribe((params: Params) => {
        const watchlistId = params['watchlistId'];
        const stockId = params['stockId'];
        console.log("watchlistId: ", watchlistId);
        console.log("stockId: ", stockId);

        // Fetch the stock details based on watchlistId and stockId
        this.watchlistService.getStockById(watchlistId, stockId).subscribe((response) => {
          this.price = response["stock"].Price;
          this.symbol = response["stock"].Ticker;
          console.log("response ", response);

          console.log(" price : ", this.price);
          console.log(" symbol : ", this.symbol);

        })
      })


    }

    this.index = this.marketWatchService.activeElementIndex;
    this.marketWatchService.activeElementChangeEvent.subscribe((data: number) => {
      this.index = this.marketWatchService.activeElementIndex;
      if (this.index != -1) {
        let current_stock = { ...this.marketWatchService.stock_list[this.index] };
        console.log("currentStock : ", current_stock);


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

    if (this.index != -1) {


      this.route.params.subscribe((params) => {
        let stockId = params['stockId'];
        let watchlistId = this.watchlistService.watchlist?.ID;
        this.marketWatchService.removeItemFromWatchlist(watchlistId!, stockId).subscribe((response) => {
          // this.watchlistService.
          this.marketWatchService.removeItem(this.index)
          console.log( " list after update : ",this.marketWatchService.stock_list);
          
          this.closeCard()

        })

      })
    }


  }
  closeCard() {
    let wid = this.watchlistService.watchlist;
    let path = '/watchlist/' + wid?.ID

    this.router.navigate([path])

  }


  startUpdateData(): void {

    setInterval(() => {
      console.log("start update is called : ");

      if (this.marketWatchService.stock_list.length > 0) {

        // this.updateData();

        if (this.price)
          this.generateBuyersAndSellers(this.price, 5.50, 5, 1000);
      }
    }, this.timeGap * 1000);
  }
  updateData(): void {


    if (this.symbol && this.index != -1) {
      console.log("index : ", this.index);


      // this.marketWatchService.emitUpdateEvent()
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


function switchMap(arg0: (params: ParamMap) => Observable<any>): import("rxjs").OperatorFunction<import("@angular/router").ParamMap, unknown> {
  throw new Error('Function not implemented.');
}

