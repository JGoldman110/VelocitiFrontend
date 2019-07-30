import { Component, OnInit, NgZone } from '@angular/core';
import { StrategyService } from '../../service/strategy.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-strategy-list',
  templateUrl: './strategy-list.component.html',
  styleUrls: ['./strategy-list.component.css']
})
export class StrategyListComponent implements OnInit {

  strategies: any = [];
  strategy: any = [{"name": "test 1",
                  "type": "TMAStrategy",
                  "ticker": "AAPL",
                  "quantity": "100",
                  "limit": "10",
                  "stop": "20",
                  "slowAVGIntervale": "20",
                  "fastAVGIntervale": "50"}];

  constructor(private strategyService: StrategyService,
              private ngZone: NgZone,
              private router: Router, ) {}

  ngOnInit() {
    this.loadStrategies();
  }

  onNew() {
    this.strategyService.CreateStrategy(this.strategy).subscribe(res => {
      console.log('New Strategy');
    });
  }

  loadStrategies() {
    return this.strategyService.GetAllStrategies().subscribe((data) => {
      data.forEach(function (value) {
        console.log(value);
        if (value['status'] == "ACTIVE") {
          value['status'] = "Active";
        }
      })
      this.strategies = data;
    })
  }
}
