import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-kq-global-search',
  templateUrl: './kq-global-search.component.html',
  styleUrls: ['./kq-global-search.component.css']
})
export class KqGlobalSearchComponent implements OnInit {

  public results: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  search(event: any) {
    console.log(event);
  }

  getSearch(){

  }


}
