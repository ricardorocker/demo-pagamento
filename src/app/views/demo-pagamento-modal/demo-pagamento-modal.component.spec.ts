import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPagamentoModalComponent } from './demo-pagamento-modal.component';

describe('DemoPagamentoModalComponent', () => {
  let component: DemoPagamentoModalComponent;
  let fixture: ComponentFixture<DemoPagamentoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoPagamentoModalComponent]
    });
    fixture = TestBed.createComponent(DemoPagamentoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
