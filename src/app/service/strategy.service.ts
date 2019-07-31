import { Injectable } from '@angular/core';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { Strategy } from "../models/strategy.model";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const base_url = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class StrategyService {
  private _strategies: BehaviorSubject<Strategy[]>;
  private base_url: string;
  private dataStore: {
    strategies: any[]
  };

  constructor(private http: HttpClient) {
    this.base_url = environment.apiUrl;
    this.dataStore = { strategies: [] };
    this._strategies = <BehaviorSubject<Strategy[]>>new BehaviorSubject([]);
  }

  get strategies() {
    return this._strategies.asObservable();
  }

  loadAll() {
    this.http.get<any[]>(this.base_url + '/strategy/getAll').subscribe(data => {
      this.dataStore.strategies = data;
      this._strategies.next(Object.assign({}, this.dataStore).strategies);
      console.log(this.dataStore);
    }, error => console.log('Could not load strategies.'));
  }
}
