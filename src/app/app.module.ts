import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { counterReducer } from './counter.reducer';

@NgModule({
  declarations: [ AppComponent, CounterComponent ],
  imports:      [ BrowserModule, StoreModule.forRoot({ count: counterReducer })],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
