import { Component } from '@angular/core';
import { SaurabhService } from '../saurabh.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.scss',
})
export class PromiseComponent {
  public responce: any = ['--no-data--'];
  constructor(private service: SaurabhService) {}

  public getResponse() {
    this.service
      .callApi()
      .then((data) => {
        this.responce = data;
        console.log(this.responce);
      })
      .catch((error) => console.log(error));
  }
}
