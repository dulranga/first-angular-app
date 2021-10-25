import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IFullUser, IUser } from './user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http
      .get<IUser[]>('https://api.github.com/users')
      .pipe(catchError(this.errorHandler));
  }
  getUserByUsername(username: string): Observable<IFullUser> {
    return this.http
      .get<IFullUser>(`https://api.github.com/users/${username}`)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.statusText || 'Server Error');
  }
}
