import { UserIp }         from './user-ip';

import {Http}           from '@angular/http';
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
        return this.http.get(this.userIpAllUrl)
            .map(response => response.json() as UserIp[])
            .catch(this.handleError);
    }

    getUserIp(id: number): Observable<UserIp> {
        const url = `${this.userIpUrl}/${id}`;
        return this.http.get(url)
            .map(response => response.json() as UserIp)
            .catch(this.handleError);
    }

    create(userIp: UserIp): Observable<UserIp> {
        return this.http
            .post(this.userIpAddUrl, JSON.stringify(userIp), {headers: this.headers})
            .map(response => response.json() as UserIp)
            .catch(this.handleError);
    }

    search(term: string): Observable<UserIp[]> {
        return this.http
            .get(`${this.userIpSearchUrl}=${term}`)
            .map(response => response.json().data as UserIp[]);
    }

    delete(id: number): Observable<void> {
        const url = `${this.userIpUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .map(() => null)
            .catch(this.handleError);
    }

    public handleError = (error: Response) => {

        // Do messaging and error handling here
        console.error('An error occurred', error.json()); // for demo purposes only

        return Observable.throw(error.json());
    }
}
