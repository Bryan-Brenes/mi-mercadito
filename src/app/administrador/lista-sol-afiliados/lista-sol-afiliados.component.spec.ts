import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSolAfiliadosComponent } from './lista-sol-afiliados.component';

describe('ListaSolAfiliadosComponent', () => {
  let component: ListaSolAfiliadosComponent;
  let fixture: ComponentFixture<ListaSolAfiliadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSolAfiliadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSolAfiliadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
