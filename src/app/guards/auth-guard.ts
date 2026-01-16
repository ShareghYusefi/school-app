import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  // inject Auth service
  const authService = inject(Auth);
  // check if user is authenticated
  if (!authService.isAuthenticated()) {
    // if not authenticated, redirect to login page
    inject(Router).navigate(['/login']);
    return false;
  }
  return true;
};
