import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';

const Web3 = require('web3');
declare var window: any;
declare var require: any

@Injectable()
export class Web3Service {

    public web3: any;

    constructor() {
        this.checkAndInstantiateWeb3();
    }

    checkAndInstantiateWeb3 = () => {
        if (typeof window.web3 !== 'undefined') {
            this.web3 = new Web3(window.web3.currentProvider);
        } else {
            const httpProvider = new Web3.providers.HttpProvider("http://127.0.0.1:8101");
            this.web3 = new Web3(httpProvider);
        }
    };

    getAccounts(): Observable<any> {
        this.web3.eth.getBlockNumber().then(console.log);
        // this.web3.eth.getGasPrice().then((result) => {
        //     console.log(this.web3.utils.fromWei(result, 'ether'))
        // });
        const eth = this.web3.eth;       
        console.log(eth);
        debugger;
        let accountDetails = [];
        return Observable.create(observer => {
            this.web3.eth.getAccounts((err, accounts) => {
                if (err != null) {
                    observer.error('There was an error fetching your accounts.')
                }

                if (accounts.length === 0) {
                    observer.error('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.')
                }

                for (let account of accounts) {
                    let accountDetail = this.getBalance(account);
                    this.getAccountListWallets(accountDetail);
                    accountDetails.push(accountDetail);
                }

                observer.next(accountDetails)
                observer.complete()
            });
        });
    }

    getBlocks(): Observable<any> {
        let blockDetails = [];
        this.getTransaction();
        return Observable.create(observer => {

            this.web3.eth.getBlockNumber().then(blockNumber => {
                for (let block = 0; block < blockNumber; block++) {
                    this.web3.eth.getBlock(block).then(blockDetail => {
                        if (blockDetail.transactions.length) {
                            blockDetails.push(blockDetail);
                        }
                    });
                }
            });
            observer.next(blockDetails)
            observer.complete()
        });
    }

    createNewAccount(accountPassword): Observable<any> {
        return Observable.create(observer => {
            this.web3.eth.personal.newAccount(accountPassword).then(status => {
                console.log(status);
            });

            observer.next(true)
            observer.complete()
        })
    }

    createPeer(peereNode): Observable<any> {
        return Observable.create(observer => {
            this.web3.eth.personal.newAccount(peereNode).then(status => {
                console.log(status);
            });

            observer.next(true)
            observer.complete()
        })
    }

    sendTransaction(from, to, value): Observable<any> {
        return Observable.create(observer => {
            this.web3.eth.sendTransaction({
                from: from,
                to: to,
                value: value
            }).then(function (receipt) {
                console.log(receipt);
            });

            observer.next(true)
            observer.complete()
        })
    }

    getAccountList(): Observable<any> {
        let accountDetails = [];
        return Observable.create(observer => {
            this.web3.eth.getAccounts((err, accounts) => {
                if (err != null) {
                    observer.error('There was an error fetching your accounts.')
                }

                observer.next(accounts)
                observer.complete()
            });
        });
    }

    getBalance(account): any {
        let accountDetail = { accountNumber: account, balanceAmount: "0", status: "Locked" };
        this.web3.eth.getBalance(account).then(balance => {
            accountDetail["balanceAmount"] = balance;
        });

        return accountDetail;
    }

    getTransaction(): any {
        let transactionHash = "0x06c8b9b9c56463d5bf8eee000152184bd418fda0c4643c167783c5b363ee3e1f";
        this.web3.eth.getTransaction(transactionHash).then(transaction => {
            console.log(transaction);
        });

        this.web3.eth.getTransactionReceipt(transactionHash).then(transaction => {
            console.log(transaction);
        });

        return "accountDetail";
    }

    getAccountListWallets(accountDetail): any {
        this.web3.eth.personal.unlockAccount(accountDetail.accountNumber, "Password@123", 300).then(accountStatus => {
            if (accountStatus) {
                accountDetail["status"] = "Unlocked";
            }
        });

        return status;
    }
}
