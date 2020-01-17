import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProductoRepartidorComponent } from './item-producto-repartidor.component';

describe('ItemProductoRepartidorComponent', () => {
  let component: ItemProductoRepartidorComponent;
  let fixture: ComponentFixture<ItemProductoRepartidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemProductoRepartidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemProductoRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
