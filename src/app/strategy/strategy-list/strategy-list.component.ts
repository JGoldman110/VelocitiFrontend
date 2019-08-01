import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StrategyService } from '../../service/strategy.service';
import { Observable, interval } from 'rxjs';
import { Strategy } from '../../models/strategy.model';

@Component({
  selector: 'app-strategy-list',
  templateUrl: './strategy-list.component.html',
  styleUrls: ['./strategy-list.component.css']
})
export class StrategyListComponent implements OnInit {
  @Output() strategyClicked = new EventEmitter<number>();

  strategies: any = [];

  constructor( private strategyService: StrategyService ) {
    interval(3000).subscribe(x => { // will execute every 3 seconds
      this.updateStrategies();
    });
  }

  ngOnInit() {
    this.updateStrategies();
  }

  updateStrategies() {
    return this.strategyService.getStrategies().subscribe((data: {}) => {
      this.strategies = data;
    })
  }

  onClick(strategy_id: number): void {
    this.strategyClicked.emit(strategy_id);
  }

  newStrategy() {

  }
}
