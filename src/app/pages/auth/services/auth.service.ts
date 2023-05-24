import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const API_USERS_URL = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  // public methods
  login(email: string, password: string) {
    return this.http.post<any>(API_USERS_URL + 'auth/login', {
      email: email,
      password: password,
    });
  }
  register(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    nationality: string,
    address: string,
    password: string
  ) {
    return this.http.post<any>(API_USERS_URL + 'auth/register', {
      firstname: firstName,
      lastname: lastName,
      nationality: nationality,
      address: address,
      email: email,
      phone: phone,
      password: password,
    });
  }

  logout() {
    localStorage.removeItem('myAppToken');
    this.router.navigate(['auth/login']);
  }

  isLogIn() {
    if (localStorage.getItem('myAppToken')) {
      return true;
    } else {
      return false;
    }
  }
}
