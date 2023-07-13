import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketDepthComponent } from 'src/Components/market-depth/market-depth.component';

const routes: Routes = [
  {
    path:"market-depth",component:MarketDepthComponent,
    
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
