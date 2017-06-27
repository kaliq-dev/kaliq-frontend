import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqHomeComponent } from './kq-home.component';

describe('KqHomeComponent', () => {
  let component: KqHomeComponent;
  let fixture: ComponentFixture<KqHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
