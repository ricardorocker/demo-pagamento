import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DemoPagamentoComponent } from './views/demo-pagamento/demo-pagamento.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { DemoPagamentoTableComponent } from './views/demo-pagamento-table/demo-pagamento-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { ItemPagamentoModalComponent } from './views/item-pagamento-modal/item-pagamento-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DemoPagamentoComponent,
    ProfileCardComponent,
    DemoPagamentoTableComponent,
    ItemPagamentoModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
