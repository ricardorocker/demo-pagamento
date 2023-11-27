import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  itemForm: FormGroup;
  constructor(private form: FormBuilder) {
    this.itemForm = this.form.group({
      descricao: ['', Validators.required],
      referencia: ['', Validators.required],
      tipoItem: ['', Validators.required],
      valor: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    });
  }
  get control() {
    return this.itemForm.controls;
  }

  saveChanges() {
    this.closeModal.emit();
  }
}
