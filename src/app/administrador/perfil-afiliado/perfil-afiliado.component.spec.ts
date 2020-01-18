import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAfiliadoComponent } from './perfil-afiliado.component';

describe('PerfilAfiliadoComponent', () => {
  let component: PerfilAfiliadoComponent;
  let fixture: ComponentFixture<PerfilAfiliadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilAfiliadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAfiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
