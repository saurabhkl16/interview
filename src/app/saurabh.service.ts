import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const userProfileUrl: string = 'assets/skl.json';

@Injectable({
  providedIn: 'root',
})
export class SaurabhService {
  // userProfileUrl: string = '/assets/skl.json';

  constructor(private http: HttpClient) {}

  getUserProfile() {
    return this.http.get('/src/assets/skl.json');
  }
}
