import { Component, Input, TemplateRef, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject, Observable } from 'rxjs';
import { FolhaPagamento } from 'src/app/models/folha-pagamento';
import { ItemFolhaPagamento } from 'src/app/models/item-folha-pagamento';
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
  itensFolhaPagamento$: Observable<FolhaPagamento> =
    new BehaviorSubject<FolhaPagamento>({
      itensFolhaPagamento: [],
      totais: { totalDescontos: 0, totalProventos: 0, totalGeral: 0 },
    });
  itemToEdit?: ItemFolhaPagamento;

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
    item?: ItemFolhaPagamento
  ) {
    this.modalOperation = operation;

    item ? (this.itemToEdit = item) : null;
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
