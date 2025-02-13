import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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
    return this.http
      .get('http://jsonplaceholder.typicode.com/posts')
      .toPromise();
  }

  // Service message command
  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  callApi(): Promise<any> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .toPromise();
  }

  callApiUsingObservable(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
