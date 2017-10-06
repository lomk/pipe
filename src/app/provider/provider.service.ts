import { Provider }     from './provider';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProviderService {
    private providerAllUrl = 'http://192.168.0.219:8080/api/admin/provider/all';
    private providerUrl = 'http://192.168.0.219:8080/api/admin/provider';
    private providerAddUrl = 'http://192.168.0.219:8080/api/admin/provider/add';
    private providerSearchUrl = 'http://192.168.0.219:8080/api/admin/provider/search';
    private headers = new Headers({'Content-Type': 'application/json'});


    constructor(private http: Http) {
    }

    getProviders(): Observable<Provider[]> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        return this.http.get(this.providerAllUrl, options).map(response => response.json() as Provider[]).catch(this.handleError);
    }

    getProvider(id: number): Observable<Provider> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        const url = `${this.providerUrl}/${id}`;
        return this.http.get(url, options)
            .map(response => response.json() as Provider)
            .catch(this.handleError);
    }

    create(provider: Provider): Observable<Provider> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        return this.http
            .post(this.providerAddUrl, JSON.stringify(provider), options)
            .map(response => response.json() as Provider)
            .catch(this.handleError);
        // .catch(response => Observable.throw(response.json()));
    }

    search(term: string): Observable<Provider[]> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        return this.http
            .get(`${this.providerSearchUrl}=${term}`, options)
            .map(response => response.json().data as Provider[]);
    }

    delete(id: number): Observable<void> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        const url = `${this.providerUrl}/${id}`;
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
