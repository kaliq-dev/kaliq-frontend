import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqCategorySidebarComponent } from './kq-category-sidebar.component';

describe('KqCategorySidebarComponent', () => {
  let component: KqCategorySidebarComponent;
  let fixture: ComponentFixture<KqCategorySidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqCategorySidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqCategorySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
