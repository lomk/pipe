
import {Injectable} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {QueueRule} from './queue-rule';
import {Headers}        from '@angular/http';



import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Globals} from '../globals';




@Injectable()
export class QueueRuleService {
    private queueRuleAllUrl = this.globals.API_URL + '/api/admin/rule/all';
    private queueRuleUrl = this.globals.API_URL + '/api/admin/rule';
    private queueRuleAddUrl = this.globals.API_URL + '/api/admin/rule/add';
    private queueRuleSearchUrl = this.globals.API_URL + '/api/admin/rule/search';
    private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private globals: Globals) {
  }

    // #Code to get data with Promise
    // getQueueRules(): Promise<QueueRule[]> {
    //     return this.http.get(this.queueRuleAllUrl)
    //         .toPromise()
    //         .then(response => response.json() as QueueRule[])
    //         .catch(this.handleError);
    // }

    getQueueRules(): Observable<QueueRule[]> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        return this.http.get(this.queueRuleAllUrl, options)
          .map(res => res.json() as QueueRule[])
          .catch(this.handleError);
    }
    // Code to get data with Promise
    // getQueueRule(id: number): Promise<QueueRule> {
    //     const url = `${this.queueRuleUrl}/${id}`;
    //     return this.http.get(url)
    //         .toPromise()
    //         .then(response => response.json() as QueueRule)
    //         .catch(this.handleError);
    // }
    getQueueRule(id: number): Observable<QueueRule> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        const url = `${this.queueRuleUrl}/${id}`;
        return this.http.get(url, options).map(res => res.json() as QueueRule).catch(this.handleError);
    }

    create(queueRule: QueueRule): Observable<QueueRule> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        return this.http
            .post(this.queueRuleAddUrl, JSON.stringify(queueRule), options)
            .map(response => response.json() as QueueRule)
            .catch(this.handleError);
    }

    search(term: string): Observable<QueueRule[]> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        return this.http
            .get(`${this.queueRuleSearchUrl}=${term}`, options)
            .map(response => response.json().data as QueueRule[]);
    }

    delete(id: number): Observable<void> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        const url = `${this.queueRuleUrl}/${id}`;
        return this.http.delete(url, options)
            .map(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
