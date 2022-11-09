import { Component, Inject, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Lang, SessionService } from './core/services/session.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private session: SessionService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.session.currentLang.subscribe({
      next: (language: Lang) => {
        this.translate.use(language);
        localStorage.setItem('lang', language);

        this.renderer.setAttribute(this.document.body, 'dir', language === 'ar' ? 'rtl' : 'ltr');
        this.renderer.setStyle(this.document.body, 'direction', language === 'ar' ? 'rtl' : 'ltr');
        const htmlElement: HTMLElement = document.getElementsByTagName('html')[0];
        htmlElement.setAttribute('lang', language);
        htmlElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
      }
    });

    this.session.currentTheme.subscribe({
      next: (theme) => {
        this.renderer.setAttribute(this.document.body, 'class', `mat-typography ${theme}`);
      }
    });
  }
}
