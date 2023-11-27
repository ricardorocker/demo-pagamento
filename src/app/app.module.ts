import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DemoPagamentoComponent } from './views/demo-pagamento/demo-pagamento.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { DemoPagamentoTableComponent } from './views/demo-pagamento-table/demo-pagamento-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DemoPagamentoComponent,
    ProfileCardComponent,
    DemoPagamentoTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
