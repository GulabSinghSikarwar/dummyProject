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
  @Input() price!: number;

  scalperPrices: number[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log("price in scalper:", this.price);
    this.addFirstFivePrice();
    this.scalperPrices.push(this.price);
    this.addLastFive();
  }

  addFirstFivePrice() {
    let tick = 0.05;

    for (let i = 5; i >= 1; i--) {
      this.scalperPrices.push(this.price + tick * i);
    }
  }

  addLastFive() {
    let tick = 0.05;

    for (let i = 1; i <= 5; i++) {
      this.scalperPrices.push(this.price - tick * i);
    }
  }
}
