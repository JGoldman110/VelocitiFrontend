import { Component, OnInit, Input, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { Strategy } from '../../models/strategy.model';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { StrategyService } from '../../service/strategy.service';
import { OrderService } from '../../service/order.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-strategy-detail',
  templateUrl: './strategy-detail.component.html',
  styleUrls: ['./strategy-detail.component.css']
})
export class StrategyDetailComponent implements OnChanges {

  @Input() strategyId: number;

  strategy: any;
  orders: any;
  lineChart: any;

  showDetails:boolean = true;
  showStatitics:boolean = false;
  showTrades:boolean = false;
  loadingStrategy = false;

  chartOptions = {
    responsive: true,
    animation: {
        duration: 0 // general animation time
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        }
      }],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          gridLines: {
            display: false,
          }
        }
      ]
    },
  };

  lineChartColors;

  chartData = [];
  chartLabels = [];

  onChartClick(event) {
    console.log(event);
  }

  constructor(private strategyService: StrategyService,
              private orderService: OrderService) {}

  ngOnChanges() {
    if (this.strategyId != null) {
      this.loadingStrategy = true;
      //Update strategy and orders every second
      interval(1000).subscribe(x => {
        this.updateStrategy(this.strategyId);
        this.updateOrders(this.strategyId);
      });
      // this.updateStrategy(this.strategyId);
      // this.updateOrders(this.strategyId);
    }
  }

  updateStrategy(id: number) {
    return this.strategyService.getStrategy(id).subscribe((data: {}) => {
      this.strategy = data;
      if (this.strategy.totalPnl >= 0) {
        this.lineChartColors = [
          {
            borderColor: '#21ce99',
            pointBackgroundColor: '#21ce99',
            pointBorderColor: '#21ce99'
          },
        ]
      }
      else {
        this.lineChartColors = [
          {
            borderColor: '#f45531',
            pointBackgroundColor: '#f45531',
            pointBorderColor: '#f45531'
          },
        ]
      }
    })
  }

  updateOrders(strategy_id: number) {
    return this.orderService.getOrders(strategy_id).subscribe(data => {
      this.orders = data;
      this.updateChartData(data);
      this.loadingStrategy = false;
    })
  }

  updateChartData(data) {
    let pnl = [];
    let dates = [];
    data.forEach((data) => {
      if (!data.buy) {
        pnl.push(data.pnl);
        dates.push("");
      }
    });

    this.chartData = [
      { data: pnl, label: 'PNL' }
    ];

    this.chartLabels = dates;

  }

  parseStrategy() {
    this.parseStrategyType();
  }

  parseStrategyType() {
    if (this.strategy.type == "TMAStrategy"){
      this.strategy.type = "Two Moving Average";
    }
    else if (this.strategy.type == "BBStrategy"){
      this.strategy.type = "Bollinger Bands";
    }

  }

  toggelDetails() {
    this.showTrades = false;
    this.showStatitics = false;
    this.showDetails = true;
  }

  toggelStatistics() {
    this.showTrades = false;
    this.showDetails = false;
    this.showStatitics = true;
  }

  toggelTrades() {
    this.showStatitics = false;
    this.showDetails = false;
    this.showTrades = true;
  }

}
