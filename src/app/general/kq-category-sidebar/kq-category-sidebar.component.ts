import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-kq-category-sidebar',
  templateUrl: './kq-category-sidebar.component.html',
  styleUrls: ['./kq-category-sidebar.component.css']
})
export class KqCategorySidebarComponent implements OnInit {

  public categoryList = [
    {name: 'Hardware', img: 'HARDWARE.png'},
    {name: 'Office Supplies', img: 'OFFICE_SUPPLIES.png'},
    {name: 'Power Tools', img: 'POWER_TOOL.png'},
    {name: 'Security', img: 'SECURITY.png'},
    {name: 'Paint', img: 'PAINT.png'},
    {name: 'Nuts & Bolts', img: 'NUTS_BOLTS.png'},
    {name: 'Lighting', img: 'LIGHTING.png'},
    {name: 'Electronics', img: 'ELECTRONICS.png'},
    {name: 'Electrical', img: 'ELECTRICALS.png'},
    {name: 'Equipment & Mac', img: 'EQUIPMENTS_MECHNERIES.png'},
    {name: 'Car', img: 'HARDWARE.png'},
    {name: 'Coffee', img: 'HARDWARE.png'},
    {name: 'Computers', img: 'HARDWARE.png'}
  ];

  constructor() {
  }

  ngOnInit() {

  }


}
