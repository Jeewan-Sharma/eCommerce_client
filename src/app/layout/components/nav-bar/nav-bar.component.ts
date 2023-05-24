import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/auth/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(public router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  classApplied = false;
  toggleClass() {
    this.classApplied = !this.classApplied;
  }
  async logout() {
    await this.authService.logout();
  }
}
