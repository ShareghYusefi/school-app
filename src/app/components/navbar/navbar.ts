import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth';
import { IUser } from '../../interfaces/iauth';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  currentUser: IUser | null = null;
  isAuthenticated = false;

  constructor(private authService: Auth, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to current user observable
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
      this.isAuthenticated = this.authService.isAuthenticated();
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
