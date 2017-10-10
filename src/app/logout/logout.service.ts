import {Http, RequestOptions}   from '@angular/http';
import { Injectable }           from '@angular/core';
import {Headers}                from '@angular/http';
import {Observable}             from 'rxjs/Observable';
import {Globals}                from '../globals';


@Injectable()
export class LogoutService {
  private logoutUrl = this.globals.API_URL + '/logout';
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: Http, private globals: Globals) {}

  logout(): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;

    return this.http
      .get(this.logoutUrl,  options)
      .map(response => { console.log(response.toString());
      });
  }
}
