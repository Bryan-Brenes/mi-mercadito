import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPuestoComercianteComponent } from './mi-puesto-comerciante.component';

describe('MiPuestoComercianteComponent', () => {
  let component: MiPuestoComercianteComponent;
  let fixture: ComponentFixture<MiPuestoComercianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiPuestoComercianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPuestoComercianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
