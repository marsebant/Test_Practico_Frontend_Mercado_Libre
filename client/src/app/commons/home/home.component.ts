import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //#region Component Attributes
  message: string; // Welcome message
  //#endregion

  constructor() {
    this.message = environment.homePage.message;
  }

  ngOnInit(): void {}
}
