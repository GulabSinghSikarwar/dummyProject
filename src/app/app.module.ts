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
import { LoginComponent } from 'src/Components/Auth/login/login.component';
import { SignupComponent } from 'src/Components/Auth/signup/signup.component';
import { AuthService } from 'src/Services/AuthService/auth-service.service';
import { WatchlistService } from 'src/Services/WatchlistService/watchlist.service';
import { AuthGaurdService } from 'src/Services/AuthService/auth-gaurd.service';
import { ErrorWarningComponent } from 'src/Components/Utils/ErrorMessage/error-warning/error-warning.component';

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
    LoginComponent,
    SignupComponent,
    ErrorWarningComponent
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
    AuthService,
    WatchlistService,
    AuthGaurdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
