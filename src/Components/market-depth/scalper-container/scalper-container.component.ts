import { Component, Input, OnInit } from '@angular/core';

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

  scalperPrices: number[] = [];
  scalperVolumes: number[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log("price in scalper:", this.price);
    if (this.price) {

      this.addFirstFivePrice();
      this.scalperPrices.push(this.price);
      this.addLastFive();
      this.generateVolume()
    }
  }

  addFirstFivePrice() {
    let tick = 0.05;

    if (this.price) {

      for (let i = 5; i >= 1; i--) {
        this.scalperPrices.push(this.price + tick * i);
      }
    }
  }

  addLastFive() {
    let tick = 0.05;

    if (this.price) {

      for (let i = 1; i <= 5; i++) {
        this.scalperPrices.push(this.price - tick * i);
      }
    }
  }
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  generateVolume() {
    const minNumber = 0; // Minimum number in the range
    const maxNumber = 1000; // Maximum number in the range
    const numberOfElements = 11;
    for (let i = 0; i < numberOfElements; i++) {
      const randomNumber = this.getRandomNumber(minNumber, maxNumber);
      this.scalperVolumes.push(randomNumber);
    }
  }
}
