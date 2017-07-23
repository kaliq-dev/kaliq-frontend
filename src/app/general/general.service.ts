import {Injectable} from '@angular/core';
import {CustomHttpService} from "../http.service";
import {environment} from "../../environments/environment";
import * as _ from 'underscore';
import 'rxjs/add/operator/map';

@Injectable()
export class GeneralService {

  private product_api = environment.api_server + 'product';

  constructor(private http: CustomHttpService) {}

  getAllProducts() {
    return this.http.get(this.product_api).map(res => res.json());
  }

}
