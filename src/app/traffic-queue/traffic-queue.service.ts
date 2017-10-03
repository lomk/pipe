import {Http}           from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import {TrafficQueue}   from './traffic-queue';

@Injectable()
export class TrafficQueueService {

    private trafficQueueAllUrl = 'http://192.168.0.219:8080/api/admin/trafficQueue/all';
    private trafficQueueUrl = 'http://192.168.0.219:8080/api/admin/trafficQueue';
    private trafficQueueAddUrl = 'http://192.168.0.219:8080/api/admin/trafficQueue/add';
    private trafficQueueSearchUrl = 'http://192.168.0.219:8080/api/admin/trafficQueue/search';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }
    getTrafficQueues(): Observable<TrafficQueue[]> {
        return this.http.get(this.trafficQueueAllUrl)
            .map(response => response.json() as TrafficQueue[])
            .catch(this.handleError);
    }


    getTrafficQueue(id: number): Observable<TrafficQueue> {
        const url = `${this.trafficQueueUrl}/${id}`;
        return this.http.get(url)
            .map(response => response.json() as TrafficQueue)
            .catch(this.handleError);
    }

    create(trafficQueue: TrafficQueue): Observable<TrafficQueue> {
        return this.http
            .post(this.trafficQueueAddUrl, JSON.stringify(trafficQueue), {headers: this.headers})
            .map(response => response.json() as TrafficQueue)
            .catch(this.handleError);
        // .catch(response => Observable.throw(response.json()));
    }

    search(term: string): Observable<TrafficQueue[]> {
        return this.http
            .get(`${this.trafficQueueSearchUrl}=${term}`)
            .map(response => response.json().data as TrafficQueue[]);
    }

    delete(id: number): Observable<void> {
        const url = `${this.trafficQueueUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .map(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }
}

