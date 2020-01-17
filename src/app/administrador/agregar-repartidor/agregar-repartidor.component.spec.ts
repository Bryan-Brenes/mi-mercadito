import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRepartidorComponent } from './agregar-repartidor.component';

describe('AgregarRepartidorComponent', () => {
  let component: AgregarRepartidorComponent;
  let fixture: ComponentFixture<AgregarRepartidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarRepartidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
