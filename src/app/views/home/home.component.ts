import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout();
  }

  showSuccess() {
    this.toastr.success('This is a Success message', 'Success');
  }

  showInfo() {
    this.toastr.info('This is a Info message', 'Info');
  }

  showWarning() {
    this.toastr.warning('This is a Warning message', 'Warning');
  }

}
