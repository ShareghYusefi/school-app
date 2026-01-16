import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Auth } from '../services/auth';
import { inject } from '@angular/core';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  // Inject the current `AuthService` and use it to get an authentication token:
  const token = inject(Auth).getToken(); // get token from local
  if (!token) {
    return next(req);
  }
  // Clone the request to add the authentication header.
  const newReq = req.clone({
    headers: req.headers.append('Authorization', `Bearer ${token}`),
  });
  return next(newReq);
}
