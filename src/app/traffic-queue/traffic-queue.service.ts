import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import {TrafficQueue}   from './traffic-queue';
import {Globals} from '../globals';

@Injectable()
export class TrafficQueueService {
    private trafficQueueAllUrl = this.globals.API_URL + '/api/admin/trafficQueue/all';
    private trafficQueueUrl = this.globals.API_URL + '/api/admin/trafficQueue';
    private trafficQueueAddUrl = this.globals.API_URL + '/api/admin/trafficQueue/add';
    private trafficQueueSearchUrl = this.globals.API_URL + '/api/admin/trafficQueue/search';
    private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private globals: Globals) {
  }

    getTrafficQueues(): Observable<TrafficQueue[]> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        return this.http.get(this.trafficQueueAllUrl, options)
            .map(response => response.json() as TrafficQueue[])
            .catch(this.handleError);
    }


    getTrafficQueue(id: number): Observable<TrafficQueue> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        const url = `${this.trafficQueueUrl}/${id}`;
        return this.http.get(url, options)
            .map(response => response.json() as TrafficQueue)
            .catch(this.handleError);
    }

    create(trafficQueue: TrafficQueue): Observable<TrafficQueue> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        return this.http
            .post(this.trafficQueueAddUrl, JSON.stringify(trafficQueue), options)
            .map(response => response.json() as TrafficQueue)
            .catch(this.handleError);
        // .catch(response => Observable.throw(response.json()));
    }

    search(term: string): Observable<TrafficQueue[]> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        return this.http
            .get(`${this.trafficQueueSearchUrl}=${term}`, options)
            .map(response => response.json().data as TrafficQueue[]);
    }

    delete(id: number): Observable<void> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        const url = `${this.trafficQueueUrl}/${id}`;
        return this.http.delete(url, options)
            .map(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }
}

