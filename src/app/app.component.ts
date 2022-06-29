import { Component } from '@angular/core';
import { locale as ar } from 'src/assets/i18n/ar';
import { locale as en } from 'src/assets/i18n/en';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

export type Locale = {
  lang: string;
  data: { [key: string]: any }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  defaultLanguage: string = localStorage.getItem('lang') || 'en';
  languages: Locale[] = [ar, en];

  constructor(private translate: TranslateService) {
    this.translate.addLangs(this.languages.map(l => l.lang));

    this.languages.forEach(lang => {
      this.translate.setTranslation(lang.lang, lang.data, true);
    });

    this.translate.use(this.defaultLanguage);
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe({
      next: (language: LangChangeEvent) => {
        this.translate.use(language.lang);
        localStorage.setItem('lang', language.lang);
        const htmlElement: HTMLElement = document.getElementsByTagName('html')[0];
        htmlElement.setAttribute('lang', language.lang);
        htmlElement.setAttribute('dir', language.lang === 'ar' ? 'rtl' : 'ltr');
      }
    });
  }
}
