import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth-service.service';
import { Observable } from 'rxjs';
// import {} from 'rxjs'

@Injectable()
export class UnAuthGaurdService implements CanActivate, CanActivateChild {



  constructor(private authService: AuthService, private router: Router) { }
 
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivateChild(childRoute, state)
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/'])
      return false

    }

    return true;
  }
}
