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
    console.log('Constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges detected:', changes);
    if (changes['data']) {
      console.log('Previous value:', changes['data'].previousValue);
      console.log('Current value:', changes['data'].currentValue);
    }
  }

  ngDoCheck() {
    if (this.paisa !== this.oldValue) {
      console.log('ngDoCheck: Data has changed');
      this.oldValue = this.paisa;
    }
  }

  ngOnInit() {
    console.log('ngOnInit ok');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
}
