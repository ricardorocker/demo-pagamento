import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ItemFolhaPagamento } from '../models/item-folha-pagamento';
import { FolhaPagamento } from '../models/folha-pagamento';
import { Totais } from '../models/totais';

@Injectable({
  providedIn: 'root',
})
export class DemoPagamentoService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getItensFolhaPagamento(): Observable<ItemFolhaPagamento[]> {
    return this.http.get<ItemFolhaPagamento[]>(
      `${this.apiUrl}/itensFolhaPagamento`
    );
  }

  addItem(item: ItemFolhaPagamento): Observable<ItemFolhaPagamento> {
    return this.http.post<ItemFolhaPagamento>(
      `${this.apiUrl}/itensFolhaPagamento`,
      item
    );
  }

  updateItem(item: ItemFolhaPagamento): Observable<ItemFolhaPagamento> {
    return this.http.put<ItemFolhaPagamento>(
      `${this.apiUrl}/itensFolhaPagamento/${item.id}`,
      item
    );
  }

  deleteItem(itemId: number): Observable<ItemFolhaPagamento> {
    return this.http.delete<ItemFolhaPagamento>(
      `${this.apiUrl}/itensFolhaPagamento/${itemId}`
    );
  }

  getAll(): Observable<FolhaPagamento> {
    return this.getItensFolhaPagamento().pipe(
      map((itens) => {
        const totais: Totais = {
          totalDescontos: 0,
          totalProventos: 0,
          totalGeral: 0,
        };

        itens.forEach((item) => {
          if (item.tipoItem === 'descontos') {
            totais.totalDescontos += Math.round(item.valor);
          } else if (item.tipoItem === 'proventos') {
            totais.totalProventos += Math.round(item.valor);
          }
        });

        totais.totalGeral = totais.totalProventos - totais.totalDescontos;

        const folhaPagamento: FolhaPagamento = {
          itensFolhaPagamento: [...itens],
          totais: { ...totais },
        };

        return folhaPagamento;
      })
    );
  }
}
