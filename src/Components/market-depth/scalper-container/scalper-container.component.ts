import { Component, Input, OnInit } from '@angular/core';
import { MarketWatchService } from 'src/Services/market-watch.service';

interface Order {
  price: number;
  volume: number;
}

@Component({
  selector: 'app-scalper-container',
  templateUrl: './scalper-container.component.html',
  styleUrls: ['./scalper-container.component.scss']
})
export class ScalperContainerComponent implements OnInit {
  @Input() sellers!: Order[];
  @Input() buyers!: Order[];
  @Input() price?: number;
  timeGap = 1
  scalperPrices: number[] = [];
  scalperVolumes: number[] = [];

  constructor(private marketWatchService: MarketWatchService) { }

  ngOnInit(): void {
    console.log("price in scalper:", this.price);
    if (this.price) {

      // this.addFirstFivePrice();
      this.generateIncreasingArray(this.price, 5)
      // let roundPrice = Math.round(this.price * 100) / 100;

      this.scalperPrices.push(this.roundToTwoDecimalPlaces(this.price));
      // this.addLastFive();
      this.generateDecreasingArray(this.price, 5)
      this.generateVolume()
      console.log(this.price);
      this.startUpdateData()

      console.log(this.scalperPrices);

    }

  }
  startUpdateData(): void {

    setInterval(() => {
      console.log("start SCD update is called : ");

      if (this.marketWatchService.stock_list.length > 0) {

        // this.updateData();

        if (this.price)
          this.generateVolume()
      }
    }, this.timeGap * 1000);
  }
  roundToTwoDecimalPlaces(value: number): number {
    return Math.round(value * 100) / 100;
  }
  roundToNearestIncrement(value: number, increment: number): number {
    return Math.round(value / increment) * increment;
  }
  generateIncreasingArray(startValue: number, length: number): number[] {
    const array: number[] = Array.from({ length }, (_, index) => +(startValue + 0.05 * (index + 1)).toFixed(2));
    this.scalperPrices = [...array]

    return array;
  }

  generateDecreasingArray(startValue: number, length: number): number[] {
    const array: number[] = Array.from({ length }, (_, index) => +(startValue - 0.05 * (index + 1)).toFixed(2));
    this.scalperPrices = [...this.scalperPrices, ...array]
    return array;
  }
  addFirstFivePrice() {
    let tick = 0.05;

    if (this.price) {

      for (let i = 5; i >= 1; i--) {
        let value = this.roundToTwoDecimalPlaces(this.roundToNearestIncrement((Math.random() * + (this.price + tick * i)), 0.05));
        this.scalperPrices.push(value)
        // this.scalperPrices.push(this.roundToTwoDecimalPlaces(this.price + tick * i));
      }
    }
  }

  addLastFive() {
    let tick = 0.05;

    if (this.price) {

      for (let i = 1; i <= 5; i++) {
        let value = this.roundToTwoDecimalPlaces(this.roundToNearestIncrement((Math.random() * + (this.price - tick * i)), 0.05));
        this.scalperPrices.push(value)
        // this.scalperPrices.push(this.roundToTwoDecimalPlaces(this.price - tick * i));
      }
    }
  }
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  generateVolume() {
    let volume =[] 
    const minNumber = 0; // Minimum number in the range
    const maxNumber = 1000; // Maximum number in the range
    const numberOfElements = 11;
    for (let i = 0; i < numberOfElements; i++) {
      const randomNumber = this.getRandomNumber(minNumber, maxNumber);
      volume.push(randomNumber);

    }
    this.scalperVolumes=[...volume]
  }
  priceTwodecimalPlace(num: number) {

  }
}
