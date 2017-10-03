import { LocalIp }      from './local-ip';

import {Http}           from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class LocalIpService {
    private localIpAllUrl = 'http://192.168.0.219:8080/api/admin/localIp/all';
    private localIpUrl = 'http://192.168.0.219:8080/api/admin/localIp';
    private localIpAddUrl = 'http://192.168.0.219:8080/api/admin/localIp/add';
    private localIpSearchUrl = 'http://192.168.0.219:8080/api/admin/localIp/search';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }
    getLocalIps(): Observable<LocalIp[]> {
        return this.http.get(this.localIpAllUrl)
            .map(response => response.json() as LocalIp[])
            .catch(this.handleError);
    }

    getLocalIp(id: number): Observable<LocalIp> {
        const url = `${this.localIpUrl}/${id}`;
        return this.http.get(url)
            .map(response => response.json() as LocalIp)
            .catch(this.handleError);
    }

    create(localIp: LocalIp): Observable<LocalIp> {
        return this.http
            .post(this.localIpAddUrl, JSON.stringify(localIp), {headers: this.headers})
            .map(response => response.json() as LocalIp)
            .catch(this.handleError);
    }

    search(term: string): Observable<LocalIp[]> {
        return this.http
            .get(`${this.localIpSearchUrl}=${term}`)
            .map(response => response.json().data as LocalIp[]);
    }

    delete(id: number): Observable<void> {
        const url = `${this.localIpUrl}/${id}`;
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
