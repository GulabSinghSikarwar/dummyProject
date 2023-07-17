import { Component, Input, OnInit } from '@angular/core';

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

  @Input() price !: number;
  @Input() symbol !: string;
  stockSymbol!: string;
  buyers!: Order[];
  sellers!: Order[];
  showLimitedDepth: boolean = true;

  




  constructor() {

  }

  ngOnInit(): void {
    this.generateBuyersAndSellers(this.price, 5.50, 5, 1000);


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
  showMarketDepth(){
    this.showLimitedDepth= true;

  }
  showDepthScalper(){
    this.showLimitedDepth=false;

  }
  
   
}


