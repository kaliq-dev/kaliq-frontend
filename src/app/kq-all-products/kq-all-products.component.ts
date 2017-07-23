import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../general/general.service";
import * as _ from 'underscore';

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

interface Category {
  id?: number;
  name?: string;
}

interface Supplier {
  id?: number;
  name?: string;
}

interface Brand {
  id?: number;
  name?: string;
}

@Component({
  selector: 'app-kq-all-products',
  templateUrl: './kq-all-products.component.html',
  styleUrls: ['./kq-all-products.component.css']
})
export class KqAllProductsComponent implements OnInit {

  public productList: Product[] = [];
  public categoryList: Category[] = [];
  public supplierList: Supplier[] = [];
  public brandList: Brand[] = [];

  private categoryFilterList = [];

  private productMasterList: Product[] = [];

  constructor(private generalService: GeneralService) {
  }

  ngOnInit() {
    this.categoryFilterList = [];

    this.getAllProducts();
    this.getAllBrand();
    this.getAllSupplier();
    this.getAllCategory();
  }

  //all product / brand / supplier / category
  getAllProducts() {
    this.generalService.getAllProducts()
      .subscribe(
        (res) => {
          if (res.status && res.count > 0) {
            this.productMasterList = res.data;
            this.productList = res.data;
          }
        },
        (err) => {
          console.log("Error in all products");
        }
      )
  }

  getAllBrand() {
    this.generalService.getAllBrand()
      .subscribe(
        (res) => {
          if (res.status && res.count > 0) {
            this.brandList = res.data;
          }
        },
        (err) => {
          console.log("Error in all brands");
        }
      )
  }

  getAllSupplier() {
    this.generalService.getAllSupplier()
      .subscribe(
        (res) => {
          if (res.status && res.count > 0) {
            this.supplierList = res.data;
          }
        },
        (err) => {
          console.log("Error in all products");
        }
      )
  }

  getAllCategory() {
    this.generalService.getAllCategory()
      .subscribe(
        (res) => {
          if (res.status && res.count > 0) {
            this.categoryList = res.data;
          }
        },
        (err) => {
          console.log("Error in all products");
        }
      )
  }


  // filters for category / supplier / brand
  categoryFilter(event: any, id: number) {
    if (event.target.checked) {
      this.categoryFilterList.push(id);
    } else {
      let index = this.categoryFilterList.indexOf(id);
      if (index > -1) {
        this.categoryFilterList.splice(index, 1);
      }
    }

    if (this.categoryFilterList.length > 0) {
      let data = {
        filterList: this.categoryFilterList
      }
      this.generalService.getProductByCategory(data)
        .subscribe(
          (res) => {
            let idToFilter = _.pluck(res.data, 'id');
            this.productList = [];
            _.each(this.productMasterList, (product) => {
              if (_.contains(idToFilter, product.id)) {
                this.productList.push(product);
              }
            })
          },
          (err) => {
            console.log("Error in category filter");
          }
        )
    } else {
      this.getAllProducts();
    }
  }

  supplierFilter(event: any, id: number) {
    if (event.target.checked) {

    } else {

    }
  }

  brandFilter(event: any, id: number) {
    if (event.target.checked) {

    } else {

    }
  }

  //get specifc supplier / brand / category 's product
  getProductByCategory(id: number) {

  }

  getProductBySupplier(id: number) {

  }

  getProductByBrand(id: number) {

  }

}
