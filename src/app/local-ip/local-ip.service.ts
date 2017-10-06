import { LocalIp }      from './local-ip';

import {Http, RequestOptions} from '@angular/http';
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
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        return this.http.get(this.localIpAllUrl, options)
            .map(response => response.json() as LocalIp[])
            .catch(this.handleError);
    }

    getLocalIp(id: number): Observable<LocalIp> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        const url = `${this.localIpUrl}/${id}`;
        return this.http.get(url, options)
            .map(response => response.json() as LocalIp)
            .catch(this.handleError);
    }

    create(localIp: LocalIp): Observable<LocalIp> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        return this.http
            .post(this.localIpAddUrl, JSON.stringify(localIp), options)
            .map(response => response.json() as LocalIp)
            .catch(this.handleError);
    }

    search(term: string): Observable<LocalIp[]> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        return this.http
            .get(`${this.localIpSearchUrl}=${term}`, options)
            .map(response => response.json().data as LocalIp[]);
    }

    delete(id: number): Observable<void> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        const url = `${this.localIpUrl}/${id}`;
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
