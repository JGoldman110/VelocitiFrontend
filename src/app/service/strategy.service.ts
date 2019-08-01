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
    return this.http.get(this.base_url + '/strategy/getById/' + id)
  }
  // get strategies() {
  //   return this._strategies.asObservable();
  // }
  //
  // loadAll() {
  //   this.http.get<any[]>(this.base_url + '/strategy/getAll').subscribe(data => {
  //     this.dataStore.strategies = data;
  //     this._strategies.next(Object.assign({}, this.dataStore).strategies);
  //   }, error => console.log('Could not load strategies.'));
  // }
  //
  // load(id: number) {
  //   this.http.get<Strategy>(this.base_url + '/strategy/getById' + id).subscribe(data => {
  //     let notFound = true;
  //
  //     this.dataStore.strategies.forEach((item, index) => {
  //       if (item.id === data.id) {
  //         this.dataStore.strategies[index] = data;
  //         notFound = false;
  //       }
  //     });
  //
  //     if (notFound) {
  //       this.dataStore.strategies.push(data);
  //     }
  //
  //     this._strategies.next(Object.assign({}, this.dataStore).strategies);
  //   }, error => console.log('Could not load strategy.'));
  // }

}
