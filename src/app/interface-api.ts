import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pollution } from './model/pollution.model';
import { environment } from './environement/environement';

@Injectable({
  providedIn: 'root'
})
export class InterfaceAPI {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  // Create
  createPollution(payload: Pollution): Observable<Pollution> {
    return this.http.post<Pollution>(this.baseUrl, payload)
      .pipe(catchError(this.handleError));
  }

  // Read - list
  getPollutions(): Observable<Pollution[]> {
    if (environment.useMock) {
      return this.http.get<Pollution[]>('/assets/mock-users.json')
        .pipe(catchError(this.handleError));
    }
    return this.http.get<Pollution[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  // Read - detail
  getPollutionById(id: string | number): Observable<Pollution> {
    return this.http.get<Pollution>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Update
  updatePollution(id: string | number, changes: Partial<Pollution>): Observable<Pollution> {
    return this.http.put<Pollution>(`${this.baseUrl}/${id}`, changes)
      .pipe(catchError(this.handleError));
  }

  // Delete
  deletePollution(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.error('PollutionService API error', err);
    return throwError(() => new Error(err.error?.message || err.message || 'Server error'));
  }
}

