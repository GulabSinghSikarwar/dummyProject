import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http'
import { Observable, tap } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem("token")

    let headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true'
    }

    console.log(" req on the way ");
    const modifiedRequest = req.clone({
      setHeaders: {
        ...headers
      }

    })

    return next.handle(modifiedRequest).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        const headers: HttpHeaders = event.headers;


        // const authorizationToken =headers.ge
        let authToken: string | undefined | null = headers.get("authorization");
        let refreshToken: string | undefined | null = headers.get("refresh-token")
        authToken = authToken?.trim().substring("Bearer ".length)

        refreshToken = refreshToken?.trim()

        let localAuthToken = localStorage.getItem("token")
        if (authToken && authToken.length > 0 && authToken !== localAuthToken) {
          localStorage.removeItem("token")
          localStorage.setItem("token", authToken!)
        }



      }
      
    }))
    // return next.handle(req)
  }
}
