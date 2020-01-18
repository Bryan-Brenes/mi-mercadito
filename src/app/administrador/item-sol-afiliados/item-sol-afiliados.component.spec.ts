import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSolAfiliadosComponent } from './item-sol-afiliados.component';

describe('ItemSolAfiliadosComponent', () => {
  let component: ItemSolAfiliadosComponent;
  let fixture: ComponentFixture<ItemSolAfiliadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSolAfiliadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSolAfiliadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
