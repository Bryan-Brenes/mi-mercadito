import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFacturaClienteComponent } from './item-factura-cliente.component';

describe('ItemFacturaClienteComponent', () => {
  let component: ItemFacturaClienteComponent;
  let fixture: ComponentFixture<ItemFacturaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemFacturaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFacturaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
