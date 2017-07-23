import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class CustomHttpService {

  constructor(private http: Http) { }

  private setUp() {

  }

  get(url: string) {
    const headers = new Headers();
    return this.http.get(url, {headers: headers});
  }

  post(url: string, d: any) {
    const headers = new Headers();
    return this.http.post(url, d, {headers: headers});
  }

  put(url: string, d: any) {
    const headers = new Headers();
    return this.http.put(url, d, {headers: headers});
  }

  delete(url: string) {
    const headers = new Headers();
    return this.http.delete(url, {headers: headers});
  }
}
