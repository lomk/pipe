import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';


@Injectable()
export class LoginService {
    private loginUrl = this.globals.API_URL + '/login';
    private logoutUrl = this.globals.API_URL + '/login';
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: Http, private globals: Globals) {
  }


    login(username: string, password: string): Observable<any> {
      const body = new URLSearchParams();
      body.set('username', username);
      body.set('password', password);
      body.set('submit', 'Login');
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;

      return this.http
        .post(this.loginUrl, body.toString(), options)
        .map(response => { console.log(response.status); return response;
        });
    }

    logout(): Observable<void> {
      return this.http
        .get(this.logoutUrl)
        .map(response => {
        });
    }
}
