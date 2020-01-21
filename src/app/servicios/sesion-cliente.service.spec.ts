import { TestBed } from '@angular/core/testing';

import { SesionClienteService } from './sesion-cliente.service';

describe('SesionClienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SesionClienteService = TestBed.get(SesionClienteService);
    expect(service).toBeTruthy();
  });
});
