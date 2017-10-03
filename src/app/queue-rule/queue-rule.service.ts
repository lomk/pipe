
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {QueueRule} from './queue-rule';
import {Headers}        from '@angular/http';



import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';




@Injectable()
export class QueueRuleService {
    private queueRuleAllUrl = 'http://192.168.0.219:8080/api/admin/rule/all';
    private queueRuleUrl = 'http://192.168.0.219:8080/api/admin/rule';
    private queueRuleAddUrl = 'http://192.168.0.219:8080/api/admin/rule/add';
    private queueRuleSearchUrl = 'http://192.168.0.219:8080/api/admin/rule/search';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    // #Code to get data with Promise
    // getQueueRules(): Promise<QueueRule[]> {
    //     return this.http.get(this.queueRuleAllUrl)
    //         .toPromise()
    //         .then(response => response.json() as QueueRule[])
    //         .catch(this.handleError);
    // }

    getQueueRules(): Observable<QueueRule[]> {
        return this.http.get(this.queueRuleAllUrl).map(res => res.json() as QueueRule[]).catch(this.handleError);
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
        const url = `${this.queueRuleUrl}/${id}`;
        return this.http.get(url).map(res => res.json() as QueueRule).catch(this.handleError);
    }

    create(queueRule: QueueRule): Observable<QueueRule> {
        return this.http
            .post(this.queueRuleAddUrl, JSON.stringify(queueRule),{headers: this.headers})
            .map(response => response.json() as QueueRule)
            .catch(this.handleError);
    }

    search(term: string): Observable<QueueRule[]> {
        return this.http
            .get(`${this.queueRuleSearchUrl}=${term}`)
            .map(response => response.json().data as QueueRule[]);
    }

    delete(id: number): Observable<void> {
        const url = `${this.queueRuleUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .map(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
