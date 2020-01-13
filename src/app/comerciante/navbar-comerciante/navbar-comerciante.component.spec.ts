import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComercianteComponent } from './navbar-comerciante.component';

describe('NavbarComercianteComponent', () => {
  let component: NavbarComercianteComponent;
  let fixture: ComponentFixture<NavbarComercianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComercianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComercianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
