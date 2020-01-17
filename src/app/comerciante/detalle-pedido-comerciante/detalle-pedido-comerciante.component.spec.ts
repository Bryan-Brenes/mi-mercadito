import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePedidoComercianteComponent } from './detalle-pedido-comerciante.component';

describe('DetallePedidoComercianteComponent', () => {
  let component: DetallePedidoComercianteComponent;
  let fixture: ComponentFixture<DetallePedidoComercianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePedidoComercianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePedidoComercianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
