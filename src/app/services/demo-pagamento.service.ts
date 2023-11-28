import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.http.put<any>(`${this.apiUrl}/itensFolhaPagamento/${item.id}`, item);
  }

  deleteItem(itemId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/itensFolhaPagamento/${itemId}`);
  }
}
