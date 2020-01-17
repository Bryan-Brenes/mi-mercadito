import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionProductoComercianteComponent } from './descripcion-producto-comerciante.component';

describe('DescripcionProductoComercianteComponent', () => {
  let component: DescripcionProductoComercianteComponent;
  let fixture: ComponentFixture<DescripcionProductoComercianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionProductoComercianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionProductoComercianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
