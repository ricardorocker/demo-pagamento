import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo-pagamento-table',
  templateUrl: './demo-pagamento-table.component.html',
  styleUrls: ['./demo-pagamento-table.component.css'],
})
export class DemoPagamentoTableComponent {
  @Input() isEdit: boolean = false;
}
