import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(email, password) {
    this.authService.login(email, password).subscribe(() => {
      this.router.navigate(['tables']);
    });
  }

}