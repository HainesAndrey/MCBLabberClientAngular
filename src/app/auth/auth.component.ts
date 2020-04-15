import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../MCBLabberAPI/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  user: User

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.user = new User();
  }

  auth(){
    this.authService.getToken(this.user);
  }

}
