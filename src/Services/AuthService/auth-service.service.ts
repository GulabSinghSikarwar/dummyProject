import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  token?: string | null;



  // tokenStatusEvent :EventEmitter =new EventEmitter<string> ();



  constructor(private http: HttpClient, private router: Router) {

  }

  signup(body: { name: string, email: string, password: string, confirmPassword: string }) {

    let url = `http://localhost:8000/api/auth/signup/`
    return this.http.post(url, body);

  }
  login(body: { email: string, password: string }) {

    let url = `http://localhost:8000/api/auth/login/`
    // const url = `${this.apiUrl}/login/`;

    // Set your desired content type
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Include cookies in the request
    const options = { headers, withCredentials: true };

    return this.http.post<any>(url, body, options);

  }
  logout() {
    this.removeAuthToken()
    this.token = null
    this.router.navigate(['/login'])
  }
  setToken(tokenString: string) {
    this.token = tokenString;

  }
  // Add a token to the local storage
  setAuthToken(token: string) {

    this.setToken(token)

    localStorage.setItem('token', token);
  }

  // Get the token from the local storage
  getAuthToken() {

    return localStorage.getItem('token');
  }

  // Remove the token from the local storage
  removeAuthToken() {
    console.log("remove is called");

    this.token = null;
    localStorage.removeItem('token');

  }
  isAuthenticated(): boolean {
    // console.log("token : ",this.token);

    return (this.token) ? true : false;
    return true

  }

}

