import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqUserRegComponent } from './kq-user-reg.component';

describe('KqUserRegComponent', () => {
  let component: KqUserRegComponent;
  let fixture: ComponentFixture<KqUserRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqUserRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqUserRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
