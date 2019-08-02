import { Injectable } from '@angular/core';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { Strategy } from "../models/strategy.model";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class StrategyService {
  private base_url: string;

  constructor(private http: HttpClient) {
    this.base_url = environment.apiUrl;
    // this.dataStore = { strategies: [] };
    // this._strategies = <BehaviorSubject<Strategy[]>>new BehaviorSubject([]);
  }

  getStrategies(): Observable<any> {
    return this.http.get(this.base_url + '/strategy/getAll');
  }

  getStrategy(id): Observable<any> {
    return this.http.get(this.base_url + '/strategy/getById/' + id);
  }

  createStrategy(strategy): Observable<any> {
    return this.http.post(this.base_url + '/strategy/create', strategy);
  }

}
