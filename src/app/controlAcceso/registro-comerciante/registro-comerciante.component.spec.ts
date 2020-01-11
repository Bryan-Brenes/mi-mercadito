import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComercianteComponent } from './registro-comerciante.component';

describe('RegistroComercianteComponent', () => {
  let component: RegistroComercianteComponent;
  let fixture: ComponentFixture<RegistroComercianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroComercianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComercianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
