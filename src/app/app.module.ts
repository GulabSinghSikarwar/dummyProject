import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MarketDepthComponent } from 'src/Components/market-depth/market-depth.component';
import { HeaderComponent } from 'src/Components/header/header.component';
 
import { DepthContainerComponent } from 'src/Components/market-depth/depth-container/depth-container.component';
import { ScalperContainerComponent } from 'src/Components/market-depth/scalper-container/scalper-container.component';
import { MarketWatchService } from 'src/Services/market-watch.service';
import { MarketWatchComponent } from 'src/Components/market-watch/market-watch.component'
import { StockSymbolCardComponent } from 'src/Components/market-watch/stock-symbol-card/stock-symbol-card.component';
import { MarketWatchUserInputComponent } from 'src/Components/market-watch/market-watch-user-input/market-watch-user-input.component';
import { MarketWatchOutputComponent } from 'src/Components/market-watch/market-watch-output/market-watch-output.component';

import { StockDepthComponent } from 'src/Components/market-watch/stock-depth/stock-depth.component';


import { Component, OnInit } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { NgFor, AsyncPipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop' 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MarketDepthComponent,
    DepthContainerComponent,
    ScalperContainerComponent,
    MarketWatchComponent,
    StockSymbolCardComponent,
    MarketWatchUserInputComponent,
    MarketWatchOutputComponent,
    StockDepthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatAutocompleteModule,
    AsyncPipe,
    NgFor,
    






  ],
  providers: [
    
    MarketWatchService,   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
