import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarRepartidorComponent } from './nav-bar-repartidor.component';

describe('NavBarRepartidorComponent', () => {
  let component: NavBarRepartidorComponent;
  let fixture: ComponentFixture<NavBarRepartidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarRepartidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
