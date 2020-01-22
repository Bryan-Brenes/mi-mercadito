import { TestBed } from '@angular/core/testing';

import { SesionComercianteService } from './sesion-comerciante.service';

describe('SesionComercianteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SesionComercianteService = TestBed.get(SesionComercianteService);
    expect(service).toBeTruthy();
  });
});
