import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, tap } from 'rxjs';
import { ApiService } from './api.service';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private api: ApiService,
    private router: Router,
    private session: SessionService
  ) { }

  isAuthenticated() {
    return of(!!this.session.token);
  }

  login(credentials: { username: string, password: string }) {
    return this.api.post<any>(`/auth/login`, credentials).pipe(tap(
      (response: { access:  string, refresh: string }) => {
        this.session.token = response.access;
        this.session.refresh = response.refresh;
        this.router.navigate(['dashboard']);
      }
    ));
  }

  register(values: { firstName: string, lastName: string, username: string, password: string, confirmPassword: string}) {
    return this.api.post(`/auth/register`, values);
  }

  logout() {
    this.session.token = '';
    console.log('Logout');
    this.router.navigate(['auth']);
  }

}
