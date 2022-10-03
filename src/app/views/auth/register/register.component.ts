import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  signUpForm: FormGroup = new FormGroup({
    firstName: new FormControl<string>('', Validators.required),
    lastName: new FormControl<string>('', Validators.required),
    username: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required),
    confirmPassword: new FormControl<string>('', Validators.required),
  });

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private translate: TranslateService
  ) { }

  register() {
    this.auth.register(this.signUpForm.value).subscribe({
      next: () => {},
      error: () => this.toastr.error(this.translate.instant('auth.loginError'), this.translate.instant('general.error'))
    });
  }

}
