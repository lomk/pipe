import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';


@Injectable()
export class LoginService {
    private loginUrl = 'http://192.168.0.219:8080/login';
    private logoutUrl = 'http://192.168.0.219:8080/login';
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

    constructor(private http: Http) {
    }


    login(username: string, password: string): Observable<void> {
      const body = new URLSearchParams();
      body.set('username', username);
      body.set('password', password);
      body.set('submit', 'Login');
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;

      return this.http
        .post(this.loginUrl, body.toString(), options)
        .map(response => {
        });
    }

    logout(): Observable<void> {
      return this.http
        .get(this.logoutUrl)
        .map(response => {
        });
    }
}
