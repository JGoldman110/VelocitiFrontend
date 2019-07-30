import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Strategy } from "../models/strategy.model";

@Injectable()
export class StrategyService {
  constructor(private http: Http) {}


  getAllStrategies() {
    return this.http.get('/strategy/getAll')
      .map((res: Response) => res.json().response);
  }
}
