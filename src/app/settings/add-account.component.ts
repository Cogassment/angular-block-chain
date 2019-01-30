import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Web3Service } from '../services/web3.service';

@Component({
    selector: 'add-account',
    templateUrl: './add-account.component.html'
})
export class AddAccountComponent {

    model: any = {};
    status: string;

    constructor(private router: Router, private web3Service: Web3Service) { }

    createNewAccount() {
        this.status = '';
        this.web3Service.createNewAccount(this.model.password).subscribe(accountDetails => {
            this.setStatus('New Account Created.');
        }, err => {
            this.setStatus('Error getting accounts.');
        })
    }

    setStatus = message => {
        this.status = message;
    };
}
