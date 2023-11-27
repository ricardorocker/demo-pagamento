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
}
