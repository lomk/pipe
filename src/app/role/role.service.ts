import { Role }         from './role';
import {Http, RequestOptions} from '@angular/http';
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
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        return this.http.get(this.roleAllUrl, options)
          .map(response => response.json() as Role[])
          .catch(this.handleError);
    }

    getRole(id: number): Observable<Role> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        const url = `${this.roleUrl}/${id}`;
        return this.http.get(url, options)
            .map(response => response.json() as Role)
            .catch(this.handleError);
    }

    create(role: Role): Observable<Role> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        return this.http
            .post(this.roleAddUrl, JSON.stringify(role), options)
            .map(response => response.json() as Role)
            .catch(this.handleError);
        // .catch(response => Observable.throw(response.json()));
    }

    search(term: string): Observable<Role[]> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        return this.http
            .get(`${this.roleSearchUrl}=${term}`, options)
            .map(response => response.json().data as Role[]);
    }

    delete(id: number): Observable<void> {
      const options = new RequestOptions();
      options.withCredentials = true;
      options.headers = this.headers;
        const url = `${this.roleUrl}/${id}`;
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
