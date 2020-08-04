import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ItemList } from 'src/app/interfaces/item';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css'],
})
export class SearchItemComponent implements OnInit {
  @Input() notLast: boolean;
  @Input() item: ItemList;
  freeShippingTitle: string;
  freeShippingSrc: string;
  price: string;
  description: string;

  constructor(private router: Router) {
    this.freeShippingSrc = '../../..' + environment.itemList.freeShippingIconPath;
    this.freeShippingTitle = environment.itemList.freeShippingTitle;
    this.description = 'Completo Único!';
  }

  ngOnInit(): void {
    this.price = Utils.formatPrice(this.item.price);
  }

  onDetail(): void {
    this.router.navigate(['/items/', this.item.id]);
  }
}
