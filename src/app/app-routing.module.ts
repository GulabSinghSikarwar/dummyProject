import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/Components/Auth/login/login.component';
import { SignupComponent } from 'src/Components/Auth/signup/signup.component';
import { MarketDepthComponent } from 'src/Components/market-depth/market-depth.component';
import { MarketWatchComponent } from 'src/Components/market-watch/market-watch.component';
import { AuthGaurdService } from 'src/Services/AuthService/auth-gaurd.service';
import { UnAuthGaurdService } from 'src/Services/AuthService/un-auth-gaurd.service';
import { AppComponent } from './app.component';
import { WelcomeCardComponent } from 'src/Components/Utils/WelcomeCard/welcome-card/welcome-card.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: WelcomeCardComponent,
  //   // canActivate: [UnAuthGaurdService]
  // },
   {
    path: "watchlist/:watchlistId",
    canActivate: [AuthGaurdService],
    component: MarketWatchComponent,
    children: [
      { path: ":stockId", component: MarketDepthComponent }

    ]
  },
  {
    path: "market-watch", component: MarketWatchComponent,
    canActivate: [AuthGaurdService]
    // canActivateChild: [AuthGaurdService]
  },
  { path: "login", component: LoginComponent, canActivate: [UnAuthGaurdService] },
  { path: "signup", component: SignupComponent, canActivate: [UnAuthGaurdService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
