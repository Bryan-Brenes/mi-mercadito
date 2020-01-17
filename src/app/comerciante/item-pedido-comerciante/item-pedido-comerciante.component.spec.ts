import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPedidoComercianteComponent } from './item-pedido-comerciante.component';

describe('ItemPedidoComercianteComponent', () => {
  let component: ItemPedidoComercianteComponent;
  let fixture: ComponentFixture<ItemPedidoComercianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPedidoComercianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPedidoComercianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
