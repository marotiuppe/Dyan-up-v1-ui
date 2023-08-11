import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOffcanvasNavbarComponent } from './sidebar-offcanvas-navbar.component';

describe('SidebarOffcanvasNavbarComponent', () => {
  let component: SidebarOffcanvasNavbarComponent;
  let fixture: ComponentFixture<SidebarOffcanvasNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarOffcanvasNavbarComponent]
    });
    fixture = TestBed.createComponent(SidebarOffcanvasNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
