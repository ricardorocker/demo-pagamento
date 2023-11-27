import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-item-pagamento-modal',
  templateUrl: './item-pagamento-modal.component.html',
  styleUrls: ['./item-pagamento-modal.component.css'],
})
export class ItemPagamentoModalComponent {
  @Input() modalRef!: BsModalRef;
  @Input() modalOperation: 'Adicionar' | 'Editar' = 'Adicionar';
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  saveChanges() {
    this.closeModal.emit();
  }
}
