import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPedidoRepartidorComponent } from './item-pedido-repartidor.component';

describe('ItemPedidoRepartidorComponent', () => {
  let component: ItemPedidoRepartidorComponent;
  let fixture: ComponentFixture<ItemPedidoRepartidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPedidoRepartidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPedidoRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
