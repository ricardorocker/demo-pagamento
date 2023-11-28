import { Component, Input, TemplateRef, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject, Observable } from 'rxjs';
import { DemoPagamentoService } from 'src/app/services/demo-pagamento.service';

@Component({
  selector: 'app-demo-pagamento-table',
  templateUrl: './demo-pagamento-table.component.html',
  styleUrls: ['./demo-pagamento-table.component.css'],
})
export class DemoPagamentoTableComponent implements OnInit {
  @Input() isEdit: boolean = false;
  modalOperation: 'Adicionar' | 'Editar' = 'Adicionar';
  modalRef!: BsModalRef;
  itensFolhaPagamento$: Observable<any[]> = new BehaviorSubject<any[]>([]);
  itemToEdit?: any;

  constructor(
    private modalService: BsModalService,
    private demoPagamentoService: DemoPagamentoService
  ) {}

  loadData() {
    this.itensFolhaPagamento$ = this.demoPagamentoService.getAll();
  }

  ngOnInit(): void {
    this.loadData();
  }

  openModal(
    template: TemplateRef<any>,
    operation: 'Adicionar' | 'Editar',
    item?: any
  ) {
    this.modalOperation = operation;

    item ? (this.itemToEdit = item) : (this.itemToEdit = null);
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  closeAndRefresh(toRefresh: boolean) {
    if (toRefresh) this.loadData();
    this.modalRef.hide();
  }

  deleteItem(itemId: number) {
    this.demoPagamentoService.deleteItem(itemId).subscribe(() => {
      this.closeAndRefresh(true);
    });
  }
}
