import { Component } from '@angular/core';
import { Web3Service } from '../services/web3.service';

@Component({
  selector: 'view-accounts',
  templateUrl: './view-accounts.component.html'
})
export class ViewAccountsComponent {
  accounts: any;
  status: string;

  constructor(private web3Service: Web3Service) {
    this.getAccounts();
  }

  getAccounts() {
    this.web3Service.getAccounts().subscribe(accountDetails => {
      this.accounts = accountDetails;
    }, err => {
      this.setStatus('Error getting accounts.')
    })
  };

  setStatus = message => {
    this.status = message;
  };
}
