import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqShoppingCartComponent } from './kq-shopping-cart.component';

describe('KqShoppingCartComponent', () => {
  let component: KqShoppingCartComponent;
  let fixture: ComponentFixture<KqShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqShoppingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
