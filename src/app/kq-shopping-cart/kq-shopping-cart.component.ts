import {Component, OnInit} from '@angular/core';
import {Product} from '../general/Product';


@Component({
  selector: 'app-kq-shopping-cart',
  templateUrl: './kq-shopping-cart.component.html',
  styleUrls: ['./kq-shopping-cart.component.css']
})
export class KqShoppingCartComponent implements OnInit {

  public shoppingCart: Product[] = [];
  public totalPrice: number = 0;

  constructor() {
  }

  ngOnInit() {
    this.totalPrice = 0;
    if (localStorage.getItem('shopping-cart')) {
      this.shoppingCart = JSON.parse(localStorage.getItem('shopping-cart'));
      this.shoppingCart.map((item) => {
        this.totalPrice += item.price;
      })
    }
  }

}
