import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Angulartics2Module } from 'angulartics2';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { QuoteService } from './quote.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    Angulartics2Module,
    HeaderRoutingModule
  ],
  declarations: [
    HeaderComponent
  ],
  providers: [
    QuoteService
  ]
})
export class HomeModule { }
