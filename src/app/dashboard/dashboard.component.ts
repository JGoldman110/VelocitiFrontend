import { Component, OnInit } from '@angular/core';
import { Strategy } from '../models/strategy.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public clickedStrategyId: number;

  showStatistics: boolean = true;

  ngOnInit() {

  }

  childStrategyClicked(strategy_id: number) {
    this.showStatistics = false;
    this.clickedStrategyId = strategy_id;
  }
}
