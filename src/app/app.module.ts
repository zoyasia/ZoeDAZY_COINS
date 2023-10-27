import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoinsComponent } from './coins/coins.component';
import { CoinModalComponent } from './coin-modal/coin-modal.component';

import { HttpClientModule } from '@angular/common/http';
import localeFR from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoinsComponent,
    CoinModalComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
