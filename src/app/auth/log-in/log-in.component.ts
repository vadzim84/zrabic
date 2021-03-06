import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogIn() {
    if (this.email.valid && this.password.valid) {
      this.authService.onLogIn(this.email.value, this.password.value).subscribe()
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required') || this.email.hasError('jhsdk')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


}
