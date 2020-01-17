import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPedidosRepartidorComponent } from './detalles-pedidos-repartidor.component';

describe('DetallesPedidosRepartidorComponent', () => {
  let component: DetallesPedidosRepartidorComponent;
  let fixture: ComponentFixture<DetallesPedidosRepartidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesPedidosRepartidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPedidosRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
