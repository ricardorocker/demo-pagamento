import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoPagamentoService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getItensFolhaPagamento(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/itensFolhaPagamento`);
  }

  addItem(item: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/itensFolhaPagamento`, item);
  }

  updateItem(item: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/itensFolhaPagamento/${item.id}`,
      item
    );
  }

  deleteItem(itemId: number): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/itensFolhaPagamento/${itemId}`
    );
  }

  getAll(): Observable<any[]> {
    return this.getItensFolhaPagamento().pipe(
      map((itens) => {
        const totais: {
          totalDescontos: number;
          totalProventos: number;
          totalGeral: number;
        } = {
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

        const itensComTotais = [...itens, totais];
        return itensComTotais;
      })
    );
  }
}
