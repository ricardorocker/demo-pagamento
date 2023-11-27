import { Component, Input, TemplateRef, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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
  itensFolhaPagamento: any[] = [];
  // itensFolhaPagamento: any[] = [
  //   {
  //     descricao: 'Adicional Noturno',
  //     referencia: '12,00',
  //     descontos: '',
  //     proventos: 'R$ 161,60',
  //   },
  //   {
  //     descricao: 'DSR Reflexo H.Extras',
  //     referencia: '4,14',
  //     descontos: '',
  //     proventos: 'R$ 278,63',
  //   },
  //   {
  //     descricao: 'Gratificação Hora Extra',
  //     referencia: '7,00',
  //     descontos: '',
  //     proventos: 'R$ 565,61',
  //   },
  //   {
  //     descricao: 'Horas Extras c/ 100%',
  //     referencia: '60,00',
  //     descontos: '',
  //     proventos: 'R$ 8.080,20',
  //   },
  //   {
  //     descricao: 'Horas Normais',
  //     referencia: '188,00',
  //     descontos: '',
  //     proventos: 'R$ 12.658,98',
  //   },
  //   {
  //     descricao: 'INSS',
  //     referencia: '11,00',
  //     descontos: 'R$ 621,03',
  //     proventos: '',
  //   },
  // ];

  constructor(
    private modalService: BsModalService,
    private demoPagamentoService: DemoPagamentoService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.demoPagamentoService.getItensFolhaPagamento().subscribe((data) => {
      this.itensFolhaPagamento = data;
    });
  }

  openModal(template: TemplateRef<any>, operation: 'Adicionar' | 'Editar') {
    this.modalOperation = operation;
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }
}
