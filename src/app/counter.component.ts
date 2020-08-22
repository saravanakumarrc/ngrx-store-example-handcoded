import { Component } from '@angular/core'
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './counter.actions';

@Component({
 'selector': 'counter',
 'templateUrl': './counter.component.html'
})
export class CounterComponent {
  counter = 0; //its not a stream
  counter$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.counter$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}