import { Component } from '@angular/core';
import { Strategy } from '../models/strategy.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public clickedStrategyId: number;

  childStrategyClicked(strategy_id: number) {
    this.clickedStrategyId = strategy_id;
  }
}
