import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  username: FormControl = new FormControl('', Validators.required);
  password: FormControl = new FormControl('', Validators.required);

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  login() {
    this.auth.login(this.loginForm.value).subscribe({
      error: (err) => this.toastr.error(this.translate.instant('auth.loginError'), this.translate.instant('general.error'))
    });
  }

}