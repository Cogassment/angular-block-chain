import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.html',
  styleUrls:['./app.menu.css']
})

export class AppMenuComponent {

  constructor(private router: Router) { }
  
}
