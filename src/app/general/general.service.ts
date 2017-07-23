import {Injectable} from '@angular/core';
import {CustomHttpService} from "../http.service";
import {environment} from "../../environments/environment";
import * as _ from 'underscore';
import 'rxjs/add/operator/map';

@Injectable()
export class GeneralService {

  private product_api = environment.api_server + 'product/';
  private brand_api = environment.api_server + 'brand/';
  private category_api = environment.api_server + 'category/';
  private supplier_api = environment.api_server + 'supplier/';

  constructor(private http: CustomHttpService) {
  }

  getAllProducts() {
    return this.http.get(this.product_api).map(res => res.json());
  }

  getAllCategory() {
    return this.http.get(this.category_api).map(res => res.json());
  }

  getAllBrand() {
    return this.http.get(this.brand_api).map(res => res.json());
  }

  getAllSupplier() {
    return this.http.get(this.supplier_api).map(res => res.json());
  }

  getProductByCategory(data: any) {
    return this.http.post(this.product_api + 'filter-by-category', data).map(res => res.json());
  }

  getProductByBrand(data: any) {
    return this.http.post(this.brand_api + 'filter-by-brand', data).map(res => res.json());
  }

  getProductBySupplier(data: any) {
    return this.http.post(this.supplier_api + 'filter-by-supplier', data).map(res => res.json());
  }
}
