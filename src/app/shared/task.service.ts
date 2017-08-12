import { Http, Response } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {

    constructor(private http: Http) { }

    get(): Observable<Response> {
        return this.http.get('http://localhost:3000/tasks');
    }
}