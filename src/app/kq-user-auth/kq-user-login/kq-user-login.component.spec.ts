import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqUserLoginComponent } from './kq-user-login.component';

describe('KqUserLoginComponent', () => {
  let component: KqUserLoginComponent;
  let fixture: ComponentFixture<KqUserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqUserLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
