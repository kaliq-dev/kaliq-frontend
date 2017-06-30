import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqNavbarComponent } from './kq-navbar.component';

describe('KqNavbarComponent', () => {
  let component: KqNavbarComponent;
  let fixture: ComponentFixture<KqNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
