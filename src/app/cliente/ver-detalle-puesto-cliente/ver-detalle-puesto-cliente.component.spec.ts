import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDetallePuestoClienteComponent } from './ver-detalle-puesto-cliente.component';

describe('VerDetallePuestoClienteComponent', () => {
  let component: VerDetallePuestoClienteComponent;
  let fixture: ComponentFixture<VerDetallePuestoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerDetallePuestoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDetallePuestoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
