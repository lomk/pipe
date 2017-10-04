import {Http}           from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';


@Injectable()
export class LoginService {
    private loginUrl = 'http://192.168.0.219:8080/login';
    private logoutUrl = 'http://192.168.0.219:8080/login';
    private headers = new Headers({'Content-Type': 'x-www-form-urlencoded'});

    constructor(private http: Http) {
    }


    login(username: string, password: string): Observable<void> {
      const body = new URLSearchParams();
      body.set('user', username);
      body.set('password', password);

      return this.http
        .post(this.loginUrl, body.toString(), {headers: this.headers})
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
