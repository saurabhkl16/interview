import { Component, computed, Input, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
})
export class SignalComponent {
  @Input() Firstname: any;
  public sFirstName: string = 'Saurabh';
  public sLastName: string = 'Lomte';
  public sFullName = this.sFirstName + this.sLastName;

  public FirstName = signal('Saurabh');
  public LastName = signal('Lomte');
  public FullName = computed(() => this.FirstName() + ' ' + this.LastName());
  public propert_type = 'Lets try';

  ngOnInit() {}

  updateName(fname: any, lname: any) {
    this.sFirstName = fname;
    this.sLastName = lname;
    this.propert_type = 'Called Simple';
  }

  updateNameUsingSignal(fname: any, lname: any) {
    this.FirstName.set(fname);
    this.LastName.set(lname);
    this.propert_type = 'Called Signal';
  }
}
