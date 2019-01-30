import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'add-peer',
    templateUrl: './add-peer.component.html'
})
export class AddPeerComponent {

    model: any = {};

    constructor(private router: Router) { }

    addeNodeAddress() {
        console.log(this.model.password);
    }
}
