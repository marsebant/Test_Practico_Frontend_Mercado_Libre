import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  @Input() message: string;
  @Input() redirectTo: string;
  @Input() redirectMessage: string;

  constructor() {
    this.message = environment.notFoundPage.message;
    this.redirectTo = environment.notFoundPage.redirectTo;
    this.redirectMessage = environment.notFoundPage.redirectMessage;
  }

  ngOnInit(): void {
  }

}
