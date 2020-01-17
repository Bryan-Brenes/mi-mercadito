import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosHacerRepartidorComponent } from './pedidos-hacer-repartidor.component';

describe('PedidosHacerRepartidorComponent', () => {
  let component: PedidosHacerRepartidorComponent;
  let fixture: ComponentFixture<PedidosHacerRepartidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosHacerRepartidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosHacerRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
