import { Component } from '@angular/core';
import { SaurabhService } from '../saurabh.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss',
})
export class ObservableComponent {
  posts: any[] = [];

  constructor(private apiService: SaurabhService) {}

  ngOnInit() {
    this.apiService.callApiUsingObservable().subscribe({
      next: (data) => {
        // #########  post method  #########
        // this.posts = data.map((item: any) => ({
        //   id: item.id,
        //   title: item.title.toUpperCase(),
        //   body: item.body.substring(0, 50) + '...',
        // }));

        // #########  filter  ########
        this.posts = data.filter((item: any) => item.id % 2 === 0);
        console.log('API Response:', this.posts);
      },
      error: (error) => {
        console.error('Error fetching posts:', error);
      },
    });
  }
}
