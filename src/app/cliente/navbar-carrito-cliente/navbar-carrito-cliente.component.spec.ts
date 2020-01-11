import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCarritoClienteComponent } from './navbar-carrito-cliente.component';

describe('NavbarCarritoClienteComponent', () => {
  let component: NavbarCarritoClienteComponent;
  let fixture: ComponentFixture<NavbarCarritoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarCarritoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCarritoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
