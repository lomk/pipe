import { UserIp }         from './user-ip';

import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class UserIpService {
    private userIpAllUrl = 'http://192.168.0.219:8080/api/admin/userIp/all';
    private userIpUrl = 'http://192.168.0.219:8080/api/admin/userIp';
    private userIpAddUrl = 'http://192.168.0.219:8080/api/admin/userIp/add';
    private userIpSearchUrl = 'http://192.168.0.219:8080/api/admin/userIp/search';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }
    getUserIps(): Observable<UserIp[]> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        return this.http.get(this.userIpAllUrl, options)
            .map(response => response.json() as UserIp[])
            .catch(this.handleError);
    }

    getUserIp(id: number): Observable<UserIp> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        const url = `${this.userIpUrl}/${id}`;
        return this.http.get(url, options)
            .map(response => response.json() as UserIp)
            .catch(this.handleError);
    }

    create(userIp: UserIp): Observable<UserIp> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        return this.http
            .post(this.userIpAddUrl, JSON.stringify(userIp), options)
            .map(response => response.json() as UserIp)
            .catch(this.handleError);
    }

    search(term: string): Observable<UserIp[]> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        return this.http
            .get(`${this.userIpSearchUrl}=${term}`, options)
            .map(response => response.json().data as UserIp[]);
    }

    delete(id: number): Observable<void> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        const url = `${this.userIpUrl}/${id}`;
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
