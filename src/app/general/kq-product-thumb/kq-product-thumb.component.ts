import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-kq-product-thumb',
  templateUrl: './kq-product-thumb.component.html',
  styleUrls: ['./kq-product-thumb.component.css']
})
export class KqProductThumbComponent implements OnInit {

  @Input() thumbnail: any;
  public thumb: any;

  constructor() {
  }

  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges) {
    if ('thumbnail' in changes) {
      this.thumb = changes['thumbnail'].currentValue;
    }
  }


}
