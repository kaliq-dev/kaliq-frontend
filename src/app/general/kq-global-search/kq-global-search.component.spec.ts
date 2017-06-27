import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqGlobalSearchComponent } from './kq-global-search.component';

describe('KqGlobalSearchComponent', () => {
  let component: KqGlobalSearchComponent;
  let fixture: ComponentFixture<KqGlobalSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqGlobalSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqGlobalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
