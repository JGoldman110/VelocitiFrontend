import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Strategy } from '../../models/strategy.model';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { StrategyService } from '../../service/strategy.service';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-strategy-detail',
  templateUrl: './strategy-detail.component.html',
  styleUrls: ['./strategy-detail.component.css']
})
export class StrategyDetailComponent implements OnChanges {

  @Input() strategyId: number;

  strategy: any;
  orders: any;

  showDetails:boolean = true;
  showStatitics:boolean = false;
  showTrades:boolean = false;

  constructor(private strategyService: StrategyService,
              private orderService: OrderService) {}

  ngOnChanges() {
    if (this.strategyId != null){
      // this.updateOrders(this.strategyId);
      interval(3000).subscribe(x => { // will execute every 3 seconds
        this.updateStrategy(this.strategyId);
        this.parseStrategy
        this.updateOrders(this.strategyId);
      });
    }
  }

  updateOrders(strategy_id: number) {
    return this.orderService.getOrders(strategy_id).subscribe((data: {}) => {
      this.orders = data;
      console.log("Updateing orders", this.orders);

    })
  }

  parseStrategy() {
    this.parseStrategyType();
  }

  updateStrategy(id: number) {
    return this.strategyService.getStrategy(id).subscribe((data: {}) => {
      this.strategy = data;
    })
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
