import { Http } from '@angular/http';
import { Injectable } from "@angular/core";

@Injectable()
export class TaskService {

    constructor(private http: Http) { }

    get() {
        return this.http.get('http://localhost:3000/tasks');
    }
}