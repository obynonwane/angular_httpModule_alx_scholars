import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  url: string = 'https://dao-escrow.onrender.com/api/v1/auth/signin';
  sendMessage(data: any) {
    return this.http.post(this.url, data);
  }
}
