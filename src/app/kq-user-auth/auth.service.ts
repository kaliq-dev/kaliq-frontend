import {Injectable} from '@angular/core';
import {CustomHttpService} from "../http.service";
import {environment} from "../../environments/environment";
import * as _ from 'underscore';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private register_api = environment.api_server + 'auth/register';
  private login_api = environment.api_server + 'auth/login';

  constructor(private http: CustomHttpService) {
  }

  register(data: any) {
    return this.http.post(this.register_api, data).map((res) => res.json());
  }

  login(data: any) {
    return this.http.post(this.login_api, data).map((res) => res.json());
  }
}
