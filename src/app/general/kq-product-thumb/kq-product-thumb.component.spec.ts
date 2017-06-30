import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqProductThumbComponent } from './kq-product-thumb.component';

describe('KqProductThumbComponent', () => {
  let component: KqProductThumbComponent;
  let fixture: ComponentFixture<KqProductThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqProductThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqProductThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
