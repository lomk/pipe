import { Role }         from './role';
import {Http}           from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class RoleService {
    private roleAllUrl = 'http://192.168.0.219:8080/api/admin/role/all';
    private roleUrl = 'http://192.168.0.219:8080/api/admin/role';
    private roleAddUrl = 'http://192.168.0.219:8080/api/admin/role/add';
    private roleSearchUrl = 'http://192.168.0.219:8080/api/admin/role/search';
    private headers = new Headers({'Content-Type': 'application/json'});


    constructor(private http: Http) {
    }

    getRoles(): Observable<Role[]> {
        return this.http.get(this.roleAllUrl).map(response => response.json() as Role[]).catch(this.handleError);
    }

    getRole(id: number): Observable<Role> {
        const url = `${this.roleUrl}/${id}`;
        return this.http.get(url)
            .map(response => response.json() as Role)
            .catch(this.handleError);
    }

    create(role: Role): Observable<Role> {
        return this.http
            .post(this.roleAddUrl, JSON.stringify(role), {headers: this.headers})
            .map(response => response.json() as Role)
            .catch(this.handleError);
        // .catch(response => Observable.throw(response.json()));
    }

    search(term: string): Observable<Role[]> {
        return this.http
            .get(`${this.roleSearchUrl}=${term}`)
            .map(response => response.json().data as Role[]);
    }

    delete(id: number): Observable<void> {
        const url = `${this.roleUrl}/${id}`;
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
