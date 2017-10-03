import { Net }          from './net';

import {Observable}     from 'rxjs/Observable';
import {Http}           from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';




@Injectable()
export class NetService {
    private netAllUrl = 'http://192.168.0.219:8080/api/admin/net/all';
    private netUrl = 'http://192.168.0.219:8080/api/admin/net';
    private netAddUrl = 'http://192.168.0.219:8080/api/admin/net/add';
    private netSearchUrl = 'http://192.168.0.219:8080/api/admin/net/search';
    private headers = new Headers({'Content-Type': 'application/json'});


    constructor(private http: Http) {
    }
    getNets(): Observable<Net[]> {
        return this.http.get(this.netAllUrl).map(response => response.json() as Net[])
            .catch(this.handleError);
    }

    getNet(id: number): Observable<Net> {
        const url = `${this.netUrl}/${id}`;
        return this.http.get(url)
            .map(response => response.json() as Net)
            .catch(this.handleError);
    }

    create(net: Net): Observable<Net> {
        return this.http
            .post(this.netAddUrl, JSON.stringify(net), {headers: this.headers})
            .map(response => response.json() as Net)
            .catch(this.handleError)
    }

    search(term: string): Observable<Net[]> {
        return this.http
            .get(`${this.netSearchUrl}=${term}`)
            .map(response => response.json().data as Net[]);
    }

    delete(id: number): Observable<void> {
        const url = `${this.netUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .map(() => null)
            .catch(this.handleError);
    }

    public handleError = (error: Response) => {

        console.error('An error occurred', error.json()); // for demo purposes only

        return Observable.throw(error.json());
    }
}
