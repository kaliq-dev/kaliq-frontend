import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kq-home',
  templateUrl: './kq-home.component.html',
  styleUrls: ['./kq-home.component.css']
})
export class KqHomeComponent implements OnInit {

  public categoryOptionState = 'essentials';

  constructor() { }

  ngOnInit() {}

  toggleCategoryOption(){
    if(this.categoryOptionState === 'essentials'){
      this.categoryOptionState = 'all';
    }else{
      this.categoryOptionState = 'essentials';
    }
  }
}
