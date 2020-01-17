import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProductoComercianteComponent } from './item-producto-comerciante.component';

describe('ItemProductoComercianteComponent', () => {
  let component: ItemProductoComercianteComponent;
  let fixture: ComponentFixture<ItemProductoComercianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemProductoComercianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemProductoComercianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
