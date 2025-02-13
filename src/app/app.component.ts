import { Component, ElementRef, ViewChild } from '@angular/core';
import { SaurabhService } from './saurabh.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('hidden => visible', [animate('0.5s')]),
      transition('visible => hidden', [animate('0.5s')]),
    ]),
    trigger('changeColor', [
      state('red', style({ backgroundColor: 'red' })),
      state('blue', style({ backgroundColor: 'blue' })),
      transition('red => blue', [animate('0.5s')]),
      transition('blue => red', [animate('0.5s')]),
    ]),
  ],
})
export class AppComponent {
  @ViewChild('uname') input: any;
  @ViewChild('myInput') myInput!: ElementRef;

  title = 'interview';
  isVisible = true;
  boxState = 'red';
  respData: any = [];
  message: string = 'This will change';
  posts: any[] = [];
  inputVal: any;
  ngModel: any;
  model: any = {};
  registerForm!: FormGroup;
  paisa = 12;

  constructor(private saurabhSer: SaurabhService, private fb: FormBuilder) {}

  ngOnInit() {
    // this.registerForm = this.fb.group({ name: ['', Validators.required] });
    // console.log('userprofile');
    // this.saurabhSer.getUserProfile().subscribe((data: any) => {
    //   console.log('observable', data);
    //   this.respData = data.filter((data: any) => data);
    //   this.saurabhSer.currentMessage$.subscribe((message) => {
    //     this.message = message;
    //   });
    // });
    // console.log('promise');
    // this.saurabhSer
    //   .getData()
    //   .then((data) => {
    //     this.posts = data;
    //     console.log(this.posts);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching data', error);
    //   });
    // console.log('last console');
  }

  ngAfterViewInit() {
    // console.log('input val', this.input.nativeElement.value);
  }

  public toggle() {
    this.isVisible = !this.isVisible;
  }

  toggleState() {
    this.boxState = this.boxState === 'red' ? 'blue' : 'red';
  }

  doSomething() {
    console.log(this.myInput.nativeElement.value);
  }

  GetValue(inputElement: HTMLInputElement) {
    console.log(inputElement.value);
  }

  onSubmit() {
    // Handle the form submission logic here
    console.log('Form submitted!', this.model);
  }

  onReactiveFormSubmit() {
    if (this.registerForm.valid) {
      console.log('Form submitted!', this.registerForm.value);
    }
  }

  public changePaisaProperty() {
    this.paisa++;
  }
}
