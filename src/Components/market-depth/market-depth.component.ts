import { Component } from '@angular/core';

@Component({
  selector: 'app-market-depth',
  templateUrl: './market-depth.component.html',
  styleUrls: ['./market-depth.component.scss']
})
export class MarketDepthComponent {

  stockSymbol!: string;

  buy_depthData!: {
    marketVol: number,
     
    bid:number
  }[]

  sell_depth!:{
    marketVol: number,
   
    ask:number
  }[]



  constructor (){
    this.buy_depthData=[
      {
        marketVol:139,
         
        bid:1449.85,
      },
      {
        marketVol:217,
         
        bid:1449.80,
      },
      {
        marketVol:214,
         
        bid:1449.75,
      },
      {
        marketVol:184,
         
        bid:1449.70,
      },
      {
        marketVol:260,
         
        bid:1449.65,
      },
       
    ]
    this.sell_depth=[
      {
        marketVol:29,
         
        ask:1449.90,
      },
      {
        marketVol:139,
         
        ask:1449.95,
      },
      {
        marketVol:144,
         
        ask:1450.00,
      },
      {
        marketVol:207,
         
        ask:1450.05,
      },
      {
        marketVol:253,
         
        ask:1450.10,
      },
    ]
  }
}


