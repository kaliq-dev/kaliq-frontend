import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqAllProductsComponent } from './kq-all-products.component';

describe('KqAllProductsComponent', () => {
  let component: KqAllProductsComponent;
  let fixture: ComponentFixture<KqAllProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqAllProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
