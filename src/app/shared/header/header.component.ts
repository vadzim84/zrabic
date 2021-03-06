import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { AuthService } from 'src/app/auth/auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  user: string;
  $user = this.authService.user;
  userName: User;
  $userName = this.authService.userName;
  userNameSubscription: Subscription;

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
    this.userNameSubscription = this.authService.user.subscribe((user)=> this.userName = user)
  }

  onLogOut(){
    this.authService.logOut();
  }

  ngOnDestroy(){
    this.userNameSubscription.unsubscribe();
  }

}
