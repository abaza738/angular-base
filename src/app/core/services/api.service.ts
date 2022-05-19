import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get<T>(url: string, params?: {[key: string]: any}): Observable<T> {
    return this.http.get<T>(`${environment.apiUrl}${url}`, { params: params }).pipe(
      catchError(this.handleError<T>(url))
    );
  }

  post<T>(url: string, body?: {[key: string]: any}): Observable<T> {
    return this.http.post<T>(`${environment.apiUrl}${url}`, body).pipe(
      catchError(this.handleError<T>(url))
    );
  }

  patch<T>(url: string, body: {[key: string]: any}): Observable<T> {
    return this.http.patch<T>(`${environment.apiUrl}${url}`, body).pipe(
      catchError(this.handleError<T>(url))
    );
  }

  delete<T>(url: string, params: {[key: string]: any}): Observable<T> {
    return this.http.delete<T>(`${environment.apiUrl}${url}`, { params: params }).pipe(
      catchError(this.handleError<T>(url))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed with the following error:`);
      console.error(error);
      return of(result as T);
    };
  }
}
