import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  IUser,
  ILoginRequest,
  IRegisterRequest,
  IAuthResponse,
  IJwtPayload,
} from '../interfaces/iauth';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = environment.api_url;
  // tokenKey variable is used to store the token in memory and localStorage
  private tokenKey = '';
  private currentUserSubject = new BehaviorSubject<IUser | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    // Checking if token exists in localStorage, if yes, decode it and set the current user
    const token = this.getToken();
    if (token) {
      const payload = this.decodeToken(token);
      if (payload) {
        // setting the current user
        this.currentUserSubject.next({ id: payload.id, email: payload.email });
      }
    }
  }

  login(credentials: ILoginRequest): Observable<IAuthResponse> {
    return this.http
      .post<IAuthResponse>(`${this.apiUrl}/auth/login`, credentials)
      // pipe can be used to perform side effects on the observable object returned by the http post method
      .pipe(
        tap((response) => {
          if (response.token) {
            this.setToken(response.token);
            const payload = this.decodeToken(response.token);
            if (payload) {
              this.currentUserSubject.next({
                id: payload.id,
                email: payload.email,
              });
            }
          }
        })
      );
  }

  register(credentials: IRegisterRequest): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(
      `${this.apiUrl}/auth/register`,
      credentials
    );
  }

  logout(): void {
    this.removeToken();
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;
    // Check if token is expired
    const payload = this.decodeToken(token);
    if (!payload) return false;
    const now = Date.now() / 1000;
    return payload.exp > now;
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getCurrentUser(): IUser | null {
    return this.currentUserSubject.value;
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  private decodeToken(token: string): IJwtPayload | null {
    try {
      // atob is used to decode base64 strings, this function acronym stands for ASCII to binary
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload as IJwtPayload;
    } catch (error) {
      return null;
    }
  }

  // Optional: Method to get auth headers for protected requests
  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
  }
}
