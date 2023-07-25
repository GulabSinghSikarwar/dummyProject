import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/Components/Auth/login/login.component';
import { SignupComponent } from 'src/Components/Auth/signup/signup.component';
import { MarketDepthComponent } from 'src/Components/market-depth/market-depth.component';
import { MarketWatchComponent } from 'src/Components/market-watch/market-watch.component';
import { AuthGaurdService } from 'src/Services/AuthService/auth-gaurd.service';

const routes: Routes = [
  {
    path: "watchlist/:watchlistId",
    canActivateChild: [AuthGaurdService],
    component: MarketWatchComponent,
    children: [
      { path: ":stockId", component: MarketDepthComponent }

    ]
  },
  {
    path: "market-watch", component: MarketWatchComponent,
    // canActivate: [AuthGaurdService]
    canActivateChild: [AuthGaurdService]
  },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
