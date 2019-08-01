import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { StrategyListComponent } from './strategy/strategy-list/strategy-list.component';
import { StrategyDetailComponent } from './strategy/strategy-detail/strategy-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StrategyCreateComponent } from './strategy/strategy-create/strategy-create.component';

import { StrategyService } from './service/strategy.service';
import { OrderService } from './service/order.service';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StrategyListComponent,
    StrategyDetailComponent,
    DashboardComponent,
    StrategyCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StrategyService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
