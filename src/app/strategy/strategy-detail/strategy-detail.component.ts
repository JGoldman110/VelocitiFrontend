import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strategy-detail',
  templateUrl: './strategy-detail.component.html',
  styleUrls: ['./strategy-detail.component.css']
})
export class StrategyDetailComponent implements OnInit {
  showStatitics:boolen = true;
  showTrades:boolean = false;

  constructor() {

  }

  OnInit() {

  }

  toggelStatistics() {
    this.showTrades = false;
    this.showStatitics = true;
  }

  toggelTrades() {
    this.showStatitics = false;
    this.showTrades = true;
  }
}
