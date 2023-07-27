import { Injectable } from '@angular/core';
import { MarketWatchService } from '../market-watch.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class StockRouteGaurdService implements CanActivate {

  constructor(private marketwatchService: MarketWatchService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(" gaurd route : ", route);
    let result =this.marketwatchService.haveStocks(route.params['stockId'])

    return result;


  }

}
