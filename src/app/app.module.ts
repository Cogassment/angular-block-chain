import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';

import { AppHeaderComponent } from './common/header/app.header.component';
import { AppFooterComponent } from './common/footer/app.footer.component';
import { AppMenuComponent } from './common/menu/app.menu.component';

import { DashBoardComponent } from './dashboard/dashboard.component';
import { Web3Service } from './services/web3.service';
import { ViewAccountsComponent } from './settings/view-accounts.component';
import { ViewBlocksComponent } from './blocks/view-blocks.component';
import { AddAccountComponent } from './settings/add-account.component';
import { AddPeerComponent } from './settings/add-peer.component';
import { ViewPeersComponent } from './settings/view-peers.component';
import { sendTransactionComponent } from './settings/send-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppMenuComponent,
    DashBoardComponent,
    ViewAccountsComponent,
    ViewBlocksComponent,
    AddAccountComponent,
    AddPeerComponent,
    ViewPeersComponent,
    sendTransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting
  ],
  providers: [Web3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
