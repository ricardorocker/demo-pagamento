import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-pagamento-modal',
  templateUrl: './demo-pagamento-modal.component.html',
  styleUrls: ['./demo-pagamento-modal.component.css'],
})
export class DemoPagamentoModalComponent {
  @Output() itemCriado = new EventEmitter<any>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      descricao: ['', Validators.required],
      referencia: ['', Validators.required],
      descontos: [''],
      proventos: ['', Validators.required],
    });
  }

  criarItem() {
    if (this.form.valid) {
      this.itemCriado.emit(this.form.value);
      this.form.reset();
    }
  }
}
