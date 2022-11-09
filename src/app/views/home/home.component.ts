import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sixteen: any[] = Array(8);
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
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
