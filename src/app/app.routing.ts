import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashBoardComponent } from './dashboard/dashboard.component';

import { ViewAccountsComponent } from './settings/view-accounts.component';
import { ViewBlocksComponent } from './blocks/view-blocks.component';
import { AddAccountComponent } from './settings/add-account.component';
import { AddPeerComponent } from './settings/add-peer.component';
import { ViewPeersComponent } from './settings/view-peers.component';
import { sendTransactionComponent } from './settings/send-transaction.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'view-account', component: ViewAccountsComponent },
  { path: 'view-blocks', component: ViewBlocksComponent },
  { path: 'add-account', component: AddAccountComponent },
  { path: 'add-peer', component: AddPeerComponent },
  { path: 'view-peers', component: ViewPeersComponent },
  { path: 'send-transaction', component: sendTransactionComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);