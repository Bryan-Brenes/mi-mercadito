import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProductoMiPuestoComercianteComponent } from './agregar-producto-mi-puesto-comerciante.component';

describe('AgregarProductoMiPuestoComercianteComponent', () => {
  let component: AgregarProductoMiPuestoComercianteComponent;
  let fixture: ComponentFixture<AgregarProductoMiPuestoComercianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarProductoMiPuestoComercianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarProductoMiPuestoComercianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
