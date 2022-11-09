import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { Lang, SessionService, Theme } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  theme: Observable<Theme> = this.session.currentTheme.asObservable();
  lang: Observable<Lang> = this.session.currentLang.asObservable();

  constructor(
    private auth: AuthService,
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

  logout() {
    this.auth.logout();
  }

}
