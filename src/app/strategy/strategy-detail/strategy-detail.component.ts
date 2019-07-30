import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strategy-detail',
  templateUrl: './strategy-detail.component.html',
  styleUrls: ['./strategy-detail.component.css']
})
export class StrategyDetailComponent implements OnInit {
  showDetails:boolen = true;
  showStatitics:boolen = false;
  showTrades:boolean = false;

  constructor() {

  }

  OnInit() {

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
