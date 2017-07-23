import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../general/general.service";

declare var require: any;

interface Product {
  id?: number;
  name?: string;
  price?: number;
  vat?: number;
  image_list?: string[];
  supplier_name?: string;
  brand_name?: string;
  category_name?: string;
  image?: string;
}

@Component({
  selector: 'app-kq-all-products',
  templateUrl: './kq-all-products.component.html',
  styleUrls: ['./kq-all-products.component.css']
})
export class KqAllProductsComponent implements OnInit {

  public productList: Product[] = [];

  constructor(private generalService: GeneralService) {
  }

  ngOnInit() {
    this.generalService.getAllProducts()
      .subscribe(
        (res) => {
          if (res.status && res.count > 0) {
            this.productList = res.data;
          }
        },
        (err) => {
          console.log("Error in all products");
        }
      )
  }

}
