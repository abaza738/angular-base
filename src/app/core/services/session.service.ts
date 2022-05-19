import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  set token(token: string | null) {
    localStorage.setItem('token', token ? token : '');
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }
}
