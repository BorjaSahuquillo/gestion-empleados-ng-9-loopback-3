import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Employee } from '../models';

@Injectable({ providedIn: 'root' })
export class UserService {
    private baseUrl = environment.baseUrl;
    private endpoint = 'Users';

    constructor(private httpClient: HttpClient) {

    }

    public login(credentials) {
        return this.httpClient.post(`${this.baseUrl}/${this.endpoint}/login`, credentials)
            .pipe(map((data: any) => data));
    }

    public logout() {
        return this.httpClient.post(`${this.baseUrl}/${this.endpoint}/logout`, null)
            .pipe(map((data: any) => data));
    }

}