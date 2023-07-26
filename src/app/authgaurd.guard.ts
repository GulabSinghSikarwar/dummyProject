import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/Services/AuthService/auth-service.service';

// export const authgaurdGuard:

//   CanActivateFn = (route, state) => {
//     return true;
//   };

export class AuthGaurd implements CanActivateFn {
  constructor(private authService: AuthService) { }

  canActivateFn(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<boolean> | Promise<boolean> | boolean {
    // Your authentication logic here, for example:
    if (this.authService.isAuthenticated()) {
      return true; // Allow access to the route
    } else {
      // Redirect to the login page or some other unauthorized page
      return false;
    }
  }



}