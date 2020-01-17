import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRepartidoresComponent } from './item-repartidores.component';

describe('ItemRepartidoresComponent', () => {
  let component: ItemRepartidoresComponent;
  let fixture: ComponentFixture<ItemRepartidoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRepartidoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRepartidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
