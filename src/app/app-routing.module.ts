import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketDepthComponent } from 'src/Components/market-depth/market-depth.component';
import { MarketWatchComponent } from 'src/Components/market-watch/market-watch.component';

const routes: Routes = [
  {
    path:"market-depth",component:MarketDepthComponent,
    
  } ,
  {
    path:"market-watch",
    component:MarketWatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
