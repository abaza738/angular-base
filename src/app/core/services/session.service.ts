import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { locale as ar } from 'src/assets/i18n/ar';
import { locale as en } from 'src/assets/i18n/en';

export type Locale = {
  lang: string;
  data: { [key: string]: any }
};
export type Lang = "ar" | "en";
export type Theme = "light" | "dark";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  currentLang: BehaviorSubject<Lang> = new BehaviorSubject('en' as Lang);
  currentTheme: BehaviorSubject<Theme> = new BehaviorSubject("light" as Theme);
  defaultLanguage: Lang = localStorage.getItem('lang') as Lang || 'en';
  languages: Locale[] = [ar, en];

  constructor(
    private translate: TranslateService,
  ) {
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.currentTheme.next(theme as Theme);
      localStorage.setItem('theme', theme);
    }

    this.translate.addLangs(this.languages.map(l => l.lang));

    this.languages.forEach(lang => {
      this.translate.setTranslation(lang.lang, lang.data, true);
    });

    this.translate.use(this.defaultLanguage);
    this.currentLang.next(this.defaultLanguage as Lang);
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

  changeLanguage() {
    const newLang: Lang = this.translate.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(newLang);
    this.currentLang.next(newLang);
    localStorage.setItem('lang', newLang);
  }
}
