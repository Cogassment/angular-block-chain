import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Web3Service } from '../services/web3.service';

@Component({
    selector: 'send-transaction',
    templateUrl: './send-transaction.component.html'
})
export class sendTransactionComponent implements OnInit {
    accountFromAddress: any;
    accountToAddress: any;
    model: any = {};
    status: string;

    constructor(private router: Router, private web3Service: Web3Service) {
        this.setDefaultValues();
    }

    ngOnInit() {
        this.web3Service.getAccountList().subscribe(accountDetails => {
            console.log(accountDetails);
            this.accountFromAddress = accountDetails;
            this.accountToAddress = accountDetails;
        }, err => {
            this.setStatus('Error getting account Details');
        });

    }

    setDefaultValues() {
        this.model.fromAddress = null;
        this.model.toAddress = null;
    }

    sendTransaction() {
        this.status = '';
        this.web3Service.sendTransaction(this.model.fromAddress, this.model.toAddress, this.model.amount).subscribe(accountDetails => {
            this.setStatus('Transaction Done');
        }, err => {
            this.setStatus('Error send transaction');
        });
    }

    accountListFrom() {
        var accountListFrom = this.accountToAddress;

        accountListFrom.push('Select From Address');

        return accountListFrom;
    }

    setStatus = message => {
        this.status = message;
    };
}
