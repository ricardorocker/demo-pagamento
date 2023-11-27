import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPagamentoModalComponent } from './item-pagamento-modal.component';

describe('ItemPagamentoModalComponent', () => {
  let component: ItemPagamentoModalComponent;
  let fixture: ComponentFixture<ItemPagamentoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemPagamentoModalComponent]
    });
    fixture = TestBed.createComponent(ItemPagamentoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
