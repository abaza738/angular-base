import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = "light" | "dark";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  currentTheme: BehaviorSubject<Theme> = new BehaviorSubject("light" as Theme);

  constructor() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.currentTheme.next(theme as Theme);
      localStorage.setItem('theme', theme);
    }
  }

  set token(token: string | null) {
    localStorage.setItem('token', token ? token : '');
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  set refresh(token: string | null) {
    localStorage.setItem('refresh', token ? token : '');
  }

  get refresh(): string | null {
    return localStorage.getItem('refresh');
  }

  changeTheme() {
    const newTheme = this.currentTheme.value === 'light' ? 'dark' : 'light';
    this.currentTheme.next(newTheme);
    localStorage.setItem('theme', newTheme);
  }
}
