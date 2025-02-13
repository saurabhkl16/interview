import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: false,

  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss',
})
export class LifecycleComponent implements OnChanges {
  @Input() paisa: any;
  private oldValue: any;

  constructor() {
    console.log('Constructor: Component is created');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Input property changed', changes);
    if (changes['data']) {
      console.log('Previous value:', changes['data'].previousValue);
      console.log('Current value:', changes['data'].currentValue);
    }
  }

  ngDoCheck() {
    console.log('ngDoCheck: Change detection running');
    if (this.paisa !== this.oldValue) {
      this.oldValue = this.paisa;
    }
  }

  ngOnInit() {
    console.log('ngOnInit: Component initialized');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit: Content projected');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked: Projected content checked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: Component view initialized');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked: Component view checked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: Component is being destroyed');
  }

  public chnageValue() {
    this.paisa++;
  }
}
