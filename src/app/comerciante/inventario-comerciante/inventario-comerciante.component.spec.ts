import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioComercianteComponent } from './inventario-comerciante.component';

describe('InventarioComercianteComponent', () => {
  let component: InventarioComercianteComponent;
  let fixture: ComponentFixture<InventarioComercianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioComercianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioComercianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
