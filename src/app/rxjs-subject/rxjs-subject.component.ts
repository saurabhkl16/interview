import { Component } from '@angular/core';
import { SaurabhService } from '../saurabh.service';
import {
  BehaviorSubject,
  Observable,
  Observer,
  ReplaySubject,
  Subject,
} from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-subject',
  standalone: false,

  templateUrl: './rxjs-subject.component.html',
  styleUrl: './rxjs-subject.component.scss',
})
export class RxjsSubjectComponent {
  private subject = new Subject<number>();
  private behaviorSubject = new BehaviorSubject<number>(0);
  private repalaySubject = new ReplaySubject<number>(1);

  private observable = new Observable<number>((subscriber) => {
    console.log('Observable starts emitting...');
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    subscriber.next(5);
    subscriber.complete();
  });
  private observer: Observer<number> = {
    next: (value) => console.log(`Observer received value: ${value}`),
    error: (err) => console.error(`Observer received error: ${err}`),
    complete: () => console.log('Observer: Observable completed'),
  };

  constructor(private dataService: SaurabhService) {}

  ngOnInit() {
    // this.subject.subscribe((value) => console.log('sub1:', value));
    // this.subject.subscribe((value) => console.log('sub2:', value));
    // this.subject.next(1);
    // this.subject.next(2);
    // this.subject.next(3);

    // this.behaviorSubject.subscribe((value) =>
    //   console.log('behaviorSubject1:', value)
    // );
    // this.behaviorSubject.next(1);
    // this.behaviorSubject.next(12);

    // this.repalaySubject.next(11);
    // this.repalaySubject.next(12);
    // this.repalaySubject.next(13);

    // this.repalaySubject.subscribe((value) =>
    //   console.log('repalaySubject1', value)
    // );
    // this.repalaySubject.next(4);

    this.observable
      .pipe(
        filter((value) => value > 1),
        map((value) => value * 10)
      )
      .subscribe(this.observer);
  }

  sendMessage() {
    this.dataService.changeMessage('Hello from Child');
  }
}
