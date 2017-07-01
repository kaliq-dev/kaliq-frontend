import {Component, OnInit} from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-kq-category-sidebar',
  templateUrl: './kq-category-sidebar.component.html',
  styleUrls: ['./kq-category-sidebar.component.css']
})
export class KqCategorySidebarComponent implements OnInit {

  public categoryList = [
    {name: 'Hardware', img: 'HARDWARE.png', hover_img: 'HARDWARE[on].png' },
    {name: 'Office Supplies', img: 'OFFICE_SUPPLIES.png', hover_img: 'OFFICE_SUPPLIES[on].png'},
    {name: 'Power Tools', img: 'POWER_TOOL.png', hover_img: 'POWER_TOOL[on].png'},
    {name: 'Security', img: 'SECURITY.png',hover_img: 'SECURITY[on].png'},
    {name: 'Paint', img: 'PAINT.png',hover_img: 'PAINT[on].png'},
    {name: 'Nuts & Bolts', img: 'NUTS_BOLTS.png',hover_img: 'NUTS_BOLTS[on].png'},
    {name: 'Lighting', img: 'LIGHTING.png',hover_img: 'LIGHTING[on].png'},
    {name: 'Electronics', img: 'ELECTRONICS.png' , hover_img: 'ELECTRONICS[on].png'},
    {name: 'Electrical', img: 'ELECTRICALS.png', hover_img: 'ELECTRICALS[on].png'},
    {name: 'Equipment & Mac', img: 'EQUIPMENTS_MECHNERIES.png', hover_img: 'EQUIPMENTS_MECHNERIES[on].png'},
    {name: 'Car', img: 'HARDWARE.png', hover_img: 'HARDWARE[on].png'},
    {name: 'Coffee', img: 'HARDWARE.png', hover_img: 'HARDWARE[on].png'},
    {name: 'Computers', img: 'HARDWARE.png', hover_img: 'HARDWARE[on].png'}
  ];

  constructor() {
  }

  ngOnInit() {

  }

  mouseEnterCategoryItem(category){
    category['temp'] = category['img'];
    category['img'] = category['hover_img'];
  }

  mouseLeaveCategoryItem(category){
    category['img'] = category['temp'];
  }

}
