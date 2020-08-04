import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories-bar',
  templateUrl: './categories-bar.component.html',
  styleUrls: ['./categories-bar.component.css']
})
export class CategoriesBarComponent implements OnInit {

  @Input() categories: string[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
