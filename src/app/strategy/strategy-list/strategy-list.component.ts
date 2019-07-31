import { Component, OnInit } from '@angular/core';
import { StrategyService } from '../../service/strategy.service';
import { Observable } from 'rxjs';
import { Strategy } from '../../models/strategy.model';

@Component({
  selector: 'app-strategy-list',
  templateUrl: './strategy-list.component.html',
  styleUrls: ['./strategy-list.component.css']
})
export class StrategyListComponent implements OnInit {
  strategies: Observable<Strategy[]>;

  constructor( private strategyService: StrategyService ) {}

  ngOnInit() {
    this.strategies = this.strategyService.strategies; // subscribe to entire collection
    this.strategyService.loadAll();
  }
}
