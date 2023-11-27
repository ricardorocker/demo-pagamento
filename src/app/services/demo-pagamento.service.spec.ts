import { TestBed } from '@angular/core/testing';

import { DemoPagamentoService } from './demo-pagamento.service';

describe('DemoPagamentoService', () => {
  let service: DemoPagamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoPagamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
