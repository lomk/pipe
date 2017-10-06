import { User }         from './user';

import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class UserService {
    private userAllUrl = 'http://192.168.0.219:8080/api/admin/user/all';
    private userUrl = 'http://192.168.0.219:8080/api/admin/user';
    private userAddUrl = 'http://192.168.0.219:8080/api/admin/user/add';
    private userSearchUrl = 'http://192.168.0.219:8080/api/admin/user/search';
    private headers = new Headers({'Content-Type': 'application/json'});


    constructor(private http: Http) {
    }
    getUsers(): Observable<User[]> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;

        return this.http.get(this.userAllUrl, options)
            .map(response => response.json() as User[])
            .catch(this.handleError);
    }

    getUser(id: number): Observable<User> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        const url = `${this.userUrl}/${id}`;
        return this.http.get(url, options)
            .map(response => response.json() as User)
            .catch(this.handleError);
    }

    create(user: User): Observable<User> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        return this.http
            .post(this.userAddUrl, JSON.stringify(user), options)
            .map(response => response.json() as User)
            .catch(this.handleError);
    }

    search(term: string): Observable<User[]> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        return this.http
            .get(`${this.userSearchUrl}=${term}`, options)
            .map(response => response.json().data as User[]);
    }

    delete(id: number): Observable<void> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        const url = `${this.userUrl}/${id}`;
        return this.http.delete(url, options)
            .map(() => null)
            .catch(this.handleError);
    }

    public handleError = (error: Response) => {

        // Do messaging and error handling here
        console.error('An error occurred', error.json()); // for demo purposes only

        return Observable.throw(error.json());
    }
}
