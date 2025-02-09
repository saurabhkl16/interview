import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SaurabhService {
  private messageSource = new Subject<string>(); // Observable string streams
  currentMessage$ = this.messageSource.asObservable();

  constructor(private http: HttpClient) {}

  public getUserProfile() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts');
  }

  public getData(): Promise<any> { 
    return this.http.get('http://jsonplaceholder.typicode.com/posts').toPromise(); 
  }

  // Service message command
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
