import { Component } from "@angular/core";
import { Observable } from "rxjs";

// async pipe automatically subscribe to the observable and display the emitted value.

@Component({
    selector: 'async-observable-pipe',
    standalone: false,
    template: `<div><code>observable|async</code>:
         Time: {{ time | async }}</div>` 
  })
  export class AsyncObservablePipeComponent {
    time: Observable<string>;
    constructor() {
      this.time = new Observable((observer) => {
        setInterval(() => {
          observer.next(new Date().toString());
        }, 2000);
      });
    }
  }