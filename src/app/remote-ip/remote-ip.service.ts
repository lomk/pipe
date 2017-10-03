import { RemoteIp }     from './remote-ip';
import {Http}           from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class RemoteIpService {
    private remoteIpAllUrl = 'http://192.168.0.219:8080/api/admin/remoteIp/all';
    private remoteIpUrl = 'http://192.168.0.219:8080/api/admin/remoteIp';
    private remoteIpAddUrl = 'http://192.168.0.219:8080/api/admin/remoteIp/add';
    private remoteIpSearchUrl = 'http://192.168.0.219:8080/api/admin/remoteIp/search';
    private headers = new Headers({'Content-Type': 'application/json'});


    constructor(private http: Http) {
    }
    // Get data whit Promise
    // getRemoteIps(): Promise<RemoteIp[]> {
    //     return this.http.get(this.remoteIpAllUrl)
    //         .toPromise()
    //         .then(response => response.json() as RemoteIp[])
    //         .catch(this.handleError);
    // }
    getRemoteIps(): Observable<RemoteIp[]> {
        return this.http.get(this.remoteIpAllUrl).map(response => response.json() as RemoteIp[]).catch(this.handleError);
    }

    // Get data whit Promise
    // getRemoteIps(): Promise<RemoteIp[]> {
    //     return this.http.get(this.remoteIpAllUrl)
    //         .toPromise()
    //         .then(response => response.json() as RemoteIp[])
    //         .catch(this.handleError);
    // }
    // getRemoteIp(id: number): Promise<RemoteIp> {
    //     const url = `${this.remoteIpUrl}/${id}`;
    //     return this.http.get(url)
    //         .toPromise()
    //         .then(response => response.json() as RemoteIp)
    //         .catch(this.handleError);
    // }

    getRemoteIp(id: number): Observable<RemoteIp> {
        const url = `${this.remoteIpUrl}/${id}`;
        return this.http.get(url)
            .map(response => response.json() as RemoteIp)
            .catch(this.handleError);
    }

    // create(remoteIp: RemoteIp): Promise<RemoteIp> {
    //     return this.http
    //         .post(this.remoteIpAddUrl, JSON.stringify(remoteIp), {headers: this.headers})
    //         .toPromise()
    //         .then(response => response.json() as RemoteIp)
    //         .catch(this.handleError);
    // }
    create(remoteIp: RemoteIp): Observable<RemoteIp> {
        return this.http
            .post(this.remoteIpAddUrl, JSON.stringify(remoteIp), {headers: this.headers})
            .map(response => response.json() as RemoteIp)
            .catch(this.handleError);
        // .catch(response => Observable.throw(response.json()));
    }

    search(term: string): Observable<RemoteIp[]> {
        return this.http
            .get(`${this.remoteIpSearchUrl}=${term}`)
            .map(response => response.json().data as RemoteIp[]);
    }

    delete(id: number): Observable<void> {
        const url = `${this.remoteIpUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .map(() => null)
            .catch(this.handleError);
    }

    // private handleError(error: any): Observable<any> {
    //     // console.error('An error occurred', error); // for demo purposes only
    //     return Observable.throw(error);
    // }
    public handleError = (error: Response) => {

        // Do messaging and error handling here
        console.error('An error occurred', error.json()); // for demo purposes only

        return Observable.throw(error.json());
    }
}
