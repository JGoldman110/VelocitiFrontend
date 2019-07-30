import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { StrategyListComponent } from './strategy/strategy-list/strategy-list.component';
import { StrategyDetailComponent } from './strategy/strategy-detail/strategy-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StrategyListComponent,
    StrategyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
