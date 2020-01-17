import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProductoComercianteComponent } from './agregar-producto-comerciante.component';

describe('AgregarProductoComercianteComponent', () => {
  let component: AgregarProductoComercianteComponent;
  let fixture: ComponentFixture<AgregarProductoComercianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarProductoComercianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarProductoComercianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
