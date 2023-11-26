import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPagamentoTableComponent } from './demo-pagamento-table.component';

describe('DemoPagamentoTableComponent', () => {
  let component: DemoPagamentoTableComponent;
  let fixture: ComponentFixture<DemoPagamentoTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoPagamentoTableComponent]
    });
    fixture = TestBed.createComponent(DemoPagamentoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
