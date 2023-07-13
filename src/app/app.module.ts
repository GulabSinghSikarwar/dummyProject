import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MarketDepthComponent } from 'src/Components/market-depth/market-depth.component';
import { HeaderComponent } from 'src/Components/header/header.component';
import { FinnhubServiceService } from 'src/Services/finnhub-service.service';
import { DepthContainerComponent } from 'src/Components/market-depth/depth-container/depth-container.component';
import { ScalperContainerComponent } from 'src/Components/market-depth/scalper-container/scalper-container.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MarketDepthComponent,
    DepthContainerComponent,
    ScalperContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,




  ],
  providers: [
    FinnhubServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
