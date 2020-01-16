import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPuestosClienteComponent } from './ver-puestos-cliente.component';

describe('VerPuestosClienteComponent', () => {
  let component: VerPuestosClienteComponent;
  let fixture: ComponentFixture<VerPuestosClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPuestosClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPuestosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
