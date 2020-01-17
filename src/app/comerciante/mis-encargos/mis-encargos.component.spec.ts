import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisEncargosComponent } from './mis-encargos.component';

describe('MisEncargosComponent', () => {
  let component: MisEncargosComponent;
  let fixture: ComponentFixture<MisEncargosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisEncargosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisEncargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
