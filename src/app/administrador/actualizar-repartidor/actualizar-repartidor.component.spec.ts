import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarRepartidorComponent } from './actualizar-repartidor.component';

describe('ActualizarRepartidorComponent', () => {
  let component: ActualizarRepartidorComponent;
  let fixture: ComponentFixture<ActualizarRepartidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarRepartidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
