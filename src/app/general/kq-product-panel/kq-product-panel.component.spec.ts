import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqProductPanelComponent } from './kq-product-panel.component';

describe('KqProductPanelComponent', () => {
  let component: KqProductPanelComponent;
  let fixture: ComponentFixture<KqProductPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqProductPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqProductPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
