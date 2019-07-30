import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Strategy } from "../models/strategy.model";

@Injectable({
  providedIn: 'root'
})
export class StrategyService {
  base_url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
   }

   GetAllStrategies(): Observable<Strategy> {
     return this.http.get<Strategy>(this.base_url + '/strategy/getAll')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
   }

   CreateStrategy(data): Observable<any> {
    return this.http.post<any>(this.base_url + '/strategy/create', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

   // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}
