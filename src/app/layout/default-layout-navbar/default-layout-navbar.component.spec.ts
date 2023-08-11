import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutNavbarComponent } from './default-layout-navbar.component';

describe('DefaultLayoutNavbarComponent', () => {
  let component: DefaultLayoutNavbarComponent;
  let fixture: ComponentFixture<DefaultLayoutNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultLayoutNavbarComponent]
    });
    fixture = TestBed.createComponent(DefaultLayoutNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
