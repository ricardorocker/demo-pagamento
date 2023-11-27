import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DemoPagamentoComponent } from './views/demo-pagamento/demo-pagamento.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { DemoPagamentoTableComponent } from './views/demo-pagamento-table/demo-pagamento-table.component';
import { DemoPagamentoModalComponent } from './views/demo-pagamento-modal/demo-pagamento-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DemoPagamentoComponent,
    ProfileCardComponent,
    DemoPagamentoTableComponent,
    DemoPagamentoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
