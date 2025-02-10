import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
})
export class SignalComponent {
  // public FirstName: string = 'Saurabh';
  // public LastName: string = 'Lomte';
  // public FullName = this.FirstName + this.LastName;

  public FirstName = signal('Saurabh');
  public LastName = signal('Lomte');
  public FullName = computed(() => this.FirstName() + ' ' + this.LastName());

  ngOnInit() {}

  updateName(fname: any, lname: any) {
    // this.FirstName = fname;
    // this.LastName = lname;
    this.FirstName.set(fname);
    this.LastName.set(lname);
  }
}
