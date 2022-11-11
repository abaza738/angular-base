import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lang, SessionService, Theme } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  theme: Observable<Theme> = this.session.currentTheme.asObservable();
  lang: Observable<Lang> = this.session.currentLang.asObservable();

  constructor(
    private session: SessionService,
  ) { }

  ngOnInit(): void {
  }

  changeLanguage() {
    this.session.changeLanguage();
  }

  changeTheme() {
    this.session.changeTheme();
  }

}
