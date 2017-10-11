import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {User} from '../user/user';


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
        .map(response => {
          console.log('123' + response.toString());
          return response.json() as User;
        })
        .catch(this.handleError);
    }

    logout(): Observable<void> {
      return this.http
        .get(this.logoutUrl)
        .map(response => {
        });
    }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}

