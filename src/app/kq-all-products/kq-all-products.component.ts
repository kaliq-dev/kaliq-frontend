import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {GeneralService} from "../general/general.service";
import * as _ from 'underscore';
import {Brand} from '../general/Brand';
import {Supplier} from '../general/Supplier';
import {Category} from '../general/Category';
import {Product} from '../general/Product';

declare var require: any;

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
  private brandFilterList = [];
  private supplierFilterList = [];

  private productMasterList: Product[] = [];

  private shoppingCart: Product[] = [];
  public isShowCart: boolean = false;

  constructor(private generalService: GeneralService, private router: Router) {
  }

  ngOnInit() {
    localStorage.setItem("shopping-cart", "");

    this.isShowCart = false;
    this.shoppingCart = [];

    this.categoryFilterList = [];
    this.brandFilterList = [];
    this.supplierFilterList = [];

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

            this.generalService.getBase64Images({data: this.productList})
              .subscribe(
                (res) => {
                  this.productList = res.data;
                },
                (err) => {
                  console.log("Error in getting base64 images");
                }
              )
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
    this.isShowCart = false;

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
    this.isShowCart = false;

    if (event.target.checked) {
      this.supplierFilterList.push(id);
    } else {
      let index = this.supplierFilterList.indexOf(id);
      if (index > -1) {
        this.supplierFilterList.splice(index, 1);
      }
    }

    if (this.supplierFilterList.length > 0) {
      let data = {
        filterList: this.supplierFilterList
      }

      this.generalService.getProductBySupplier(data)
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
            console.log("Error in suplier filter");
          }
        )
    } else {
      this.getAllProducts();
    }
  }

  brandFilter(event: any, id: number) {
    this.isShowCart = false;

    if (event.target.checked) {
      this.brandFilterList.push(id);
    } else {
      let index = this.brandFilterList.indexOf(id);
      if (index > -1) {
        this.brandFilterList.splice(index, 1);
      }
    }

    if (this.brandFilterList.length > 0) {
      let data = {
        filterList: this.brandFilterList
      }

      this.generalService.getProductByBrand(data)
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
            console.log("Error in brand filter");
          }
        )
    } else {
      this.getAllProducts();
    }
  }


  addToCart(product: Product) {
    product.isAddToCart = true;
    if (this.shoppingCart.length > 0) {
      if (!_.findWhere(this.shoppingCart, product)) {
        this.shoppingCart.push(product);
      }
    } else {
      this.shoppingCart.push(product);
    }
  }


  showCart() {
    if (this.shoppingCart.length > 0) {
      localStorage.setItem('shopping-cart', JSON.stringify(this.shoppingCart));
      this.router.navigate(['/shopping-cart']);
    }
  }

  goToAllProducts() {
    this.isShowCart = false;
  }

  removeItem(product) {
    product.isAddToCart = false;
    this.shoppingCart = this.shoppingCart.filter((item) => {
      return item.id != product.id;
    });
  }

}
