import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required)
  });

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private translate: TranslateService
  ) { }

  login() {
    this.auth.login(this.loginForm.value).subscribe({
      error: () => this.toastr.error(this.translate.instant('auth.loginError'), this.translate.instant('general.error'))
    });
  }

}