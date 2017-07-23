import {Component, OnInit, SimpleChanges, OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-kq-product-panel',
  templateUrl: './kq-product-panel.component.html',
  styleUrls: ['./kq-product-panel.component.css']
})
export class KqProductPanelComponent implements OnInit, OnChanges {

  public panelTitle: string;

  @Input() title: string;

  public brand_img_list = ['download.png','2.jpg','mfg-falcon.jpg','og_logo.png','sst-logo.png'];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('title' in changes) {
      this.panelTitle = changes['title'].currentValue;
    }
  }

}
