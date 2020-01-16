import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCuadriculaComponent } from './item-cuadricula.component';

describe('ItemCuadriculaComponent', () => {
  let component: ItemCuadriculaComponent;
  let fixture: ComponentFixture<ItemCuadriculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCuadriculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCuadriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
