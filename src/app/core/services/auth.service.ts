import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  isAuthenticated() {
    return of(!!this.session.token);
  }

  login() {
    this.session.token = 'jwt-token-here';
    console.log('Login!');
    this.router.navigate(['home']);
  }

  logout() {
    this.session.token = '';
    console.log('Logout');
    this.router.navigate(['auth']);
  }

}
