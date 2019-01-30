import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashBoardComponent {
    title = 'Welcome to BlockChain Dashboard!';
    
    constructor(private router: Router) { }

    contentArray = [
        { 'title': 'Pensions', 'link': '#' },
        { 'title': 'Protection', 'link': '#' },
        { 'title': 'D2C', 'link': '#' },
        { 'title': 'Solvency 2', 'link': '#' },
        { 'title': 'Solvency', 'link': '#' },
        { 'title': 'InductionPack', 'link': '#' },
        { 'title': 'Archer', 'link': '#' },
        { 'title': 'Wealth', 'link': '#' }];
}
