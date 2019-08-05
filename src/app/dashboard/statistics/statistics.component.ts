import { Component, OnInit } from '@angular/core';
import { StrategyService } from '../../service/strategy.service';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  totalPerformancePercent: number = 0;
  totalPerformanceMoney: number = 0;
  topStrategies: [];
  active: number = 0;
  paused: number = 0;
  exited: number = 0;

  constructor(private strategyService: StrategyService) {}

  ngOnInit() {
    interval(1000).subscribe(x => {
      this.updateData();
    });
  }

  updateData() {
    return this.strategyService.getStrategies().subscribe((data: {}) => {
      this.calculateTotalPerformance(data);
      this.calculateStrategiesStatus(data);
      this.calculateTopStrategies(data);
    })
  }

  calculateTotalPerformance(data) {
    let tempMoney = 0;
    let tempPercent = 0;
    data.forEach((data) => {
      if (!data.buy) {
        tempMoney= tempMoney + data.totalPnl;
        tempPercent = tempPercent + data.totalPnlPercent;
      }
    });
    this.totalPerformanceMoney = tempMoney;
    this.totalPerformancePercent = tempPercent;
  }

  calculateStrategiesStatus(data) {
    let active = 0;
    let paused = 0;
    let exited = 0;
    data.forEach((data) => {
      if (data.status == "ACTIVE") {
        ++active;
      }
      else if (data.status == "PAUSED") {
        ++paused;
      }
      else {
        ++exited;
      }
    });
    this.active = active;
    this.paused = paused;
    this.exited = exited;
  }

  calculateTopStrategies(data) {

  }
}
