import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPagamentoComponent } from './demo-pagamento.component';

describe('DemoPagamentoComponent', () => {
  let component: DemoPagamentoComponent;
  let fixture: ComponentFixture<DemoPagamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoPagamentoComponent]
    });
    fixture = TestBed.createComponent(DemoPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
