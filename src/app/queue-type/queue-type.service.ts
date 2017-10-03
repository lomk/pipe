import { QueueType }     from './queue-type';
import {Http}           from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class QueueTypeService {
    private queueTypeAllUrl = 'http://192.168.0.219:8080/api/admin/queueType/all';
    private queueTypeUrl = 'http://192.168.0.219:8080/api/admin/queueType';
    private queueTypeAddUrl = 'http://192.168.0.219:8080/api/admin/queueType/add';
    private queueTypeSearchUrl = 'http://192.168.0.219:8080/api/admin/queueType/search';
    private headers = new Headers({'Content-Type': 'application/json'});


    constructor(private http: Http) {
    }
    getQueueTypes(): Observable<QueueType[]> {
        return this.http.get(this.queueTypeAllUrl).map(response => response.json() as QueueType[]).catch(this.handleError);
    }

    getQueueType(id: number): Observable<QueueType> {
        const url = `${this.queueTypeUrl}/${id}`;
        return this.http.get(url)
            .map(response => response.json() as QueueType)
            .catch(this.handleError);
    }

    create(queueType: QueueType): Observable<QueueType> {
        return this.http
            .post(this.queueTypeAddUrl, JSON.stringify(queueType), {headers: this.headers})
            .map(response => response.json() as QueueType)
            .catch(this.handleError);
        // .catch(response => Observable.throw(response.json()));
    }

    search(term: string): Observable<QueueType[]> {
        return this.http
            .get(`${this.queueTypeSearchUrl}=${term}`)
            .map(response => response.json().data as QueueType[]);
    }

    delete(id: number): Observable<void> {
        const url = `${this.queueTypeUrl}/${id}`;
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
