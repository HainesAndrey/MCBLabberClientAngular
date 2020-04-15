import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../MCBLabberAPI/auth.service';
import { HttpClient } from '@angular/common/http';

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
    let errormessage = this.authService.gettoken(this.user);
    alert(errormessage);
  }

}
