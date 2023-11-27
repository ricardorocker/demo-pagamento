import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-pagamento',
  templateUrl: './demo-pagamento.component.html',
  styleUrls: ['./demo-pagamento.component.css'],
})
export class DemoPagamentoComponent {
  isEdit: boolean = false;

  onToggleEdit() {
    this.isEdit = !this.isEdit;
  }
}
