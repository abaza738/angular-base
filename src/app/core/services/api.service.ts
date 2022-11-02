import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { UrlPipe } from 'src/app/shared/pipes/url.pipe';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private urlPipe: UrlPipe
  ) { }

  get<T = any>(url: string, params?: {[key: string]: any}): Observable<T> {
    return this.http.get<T>(this.urlPipe.transform(url), { params: params }).pipe(
      catchError(this.handleError<T>(url))
    );
  }

  post<T = any>(url: string, body?: {[key: string]: any}): Observable<T> {
    return this.http.post<T>(this.urlPipe.transform(url), body).pipe(
      catchError(this.handleError<T>(url))
    );
  }

  patch<T = any>(url: string, body: {[key: string]: any}): Observable<T> {
    return this.http.patch<T>(this.urlPipe.transform(url), body).pipe(
      catchError(this.handleError<T>(url))
    );
  }

  delete<T = any>(url: string, params: {[key: string]: any}): Observable<T> {
    return this.http.delete<T>(this.urlPipe.transform(url), { params: params }).pipe(
      catchError(this.handleError<T>(url))
    );
  }

  private handleError<T = any>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return throwError(() => new Error(`${operation} failed with the following error:`));
    };
  }
}
