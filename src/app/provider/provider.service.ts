import { Provider }     from './provider';
import {Http}           from '@angular/http';
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
        return this.http.get(this.providerAllUrl).map(response => response.json() as Provider[]).catch(this.handleError);
    }

    getProvider(id: number): Observable<Provider> {
        const url = `${this.providerUrl}/${id}`;
        return this.http.get(url)
            .map(response => response.json() as Provider)
            .catch(this.handleError);
    }

    create(provider: Provider): Observable<Provider> {
        return this.http
            .post(this.providerAddUrl, JSON.stringify(provider), {headers: this.headers})
            .map(response => response.json() as Provider)
            .catch(this.handleError);
        // .catch(response => Observable.throw(response.json()));
    }

    search(term: string): Observable<Provider[]> {
        return this.http
            .get(`${this.providerSearchUrl}=${term}`)
            .map(response => response.json().data as Provider[]);
    }

    delete(id: number): Observable<void> {
        const url = `${this.providerUrl}/${id}`;
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
