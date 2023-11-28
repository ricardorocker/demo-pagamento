import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ItemFolhaPagamento } from 'src/app/models/item-folha-pagamento';
import { DemoPagamentoService } from 'src/app/services/demo-pagamento.service';

@Component({
  selector: 'app-item-pagamento-modal',
  templateUrl: './item-pagamento-modal.component.html',
  styleUrls: ['./item-pagamento-modal.component.css'],
})
export class ItemPagamentoModalComponent implements OnInit {
  @Input() modalRef!: BsModalRef;
  @Input() modalOperation: 'Adicionar' | 'Editar' = 'Adicionar';
  @Input() itemToEdit?: ItemFolhaPagamento;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  itemForm: FormGroup;
  constructor(
    private form: FormBuilder,
    private demoPagamentoService: DemoPagamentoService
  ) {
    this.itemForm = this.form.group({
      id: [null],
      descricao: ['', Validators.required],
      referencia: ['', Validators.required],
      tipoItem: ['', Validators.required],
      valor: [
        '',
        [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
    });
  }

  ngOnInit(): void {
    if (this.modalOperation === 'Editar' && this.itemToEdit) {
      this.itemForm.patchValue(this.itemToEdit);
    }
  }

  get control() {
    return this.itemForm.controls;
  }

  saveChanges() {
    const formData = this.itemForm.value;

    if (this.modalOperation === 'Adicionar') {
      this.demoPagamentoService.addItem(formData).subscribe(() => {
        this.closeModal.emit(true);
      });
    } else if (this.modalOperation === 'Editar') {
      this.demoPagamentoService.updateItem(formData).subscribe(() => {
        this.closeModal.emit(true);
      });
    }
  }
}
