import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoClienteComponent } from './carrito-cliente.component';

describe('CarritoClienteComponent', () => {
  let component: CarritoClienteComponent;
  let fixture: ComponentFixture<CarritoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
