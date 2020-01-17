import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCompraClienteComponent } from './detalle-compra-cliente.component';

describe('DetalleCompraClienteComponent', () => {
  let component: DetalleCompraClienteComponent;
  let fixture: ComponentFixture<DetalleCompraClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCompraClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCompraClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
