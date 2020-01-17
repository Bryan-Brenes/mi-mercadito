import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComentarioComponent } from './item-comentario.component';

describe('ItemComentarioComponent', () => {
  let component: ItemComentarioComponent;
  let fixture: ComponentFixture<ItemComentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComentarioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
