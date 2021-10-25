import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IRepository } from './repositories.search';

type SearchRes = {
  items: IRepository[];
  total_count: number;
};

@Injectable({
  providedIn: 'root',
})
export class RepositoriesService {
  constructor(private http: HttpClient) {}

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.statusText || 'Server Error');
  }
  searchRepo(query: string): Observable<SearchRes> {
    return this.http
      .get<SearchRes>(`https://api.github.com/search/repositories`, {
        params: {
          q: query,
        },
      })
      .pipe(catchError(this.errorHandler));
  }
}
