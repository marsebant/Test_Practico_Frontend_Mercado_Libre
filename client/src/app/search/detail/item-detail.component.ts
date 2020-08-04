import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utils } from '../../utils/utils';

import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/services/api.service';
import { Detail } from 'src/app/interfaces/api';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  //#region Component Attributes
  itemDetails: Detail;
  categories: string[];
  loadingMsg: string;
  descriptionTitle: string;
  price: string;
  loading: boolean;
  error: boolean;
  errorMessage: string;
  notFoundMessage: string;
  redirectOnError: string;
  redirectMessage: string;
  //#endregion

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {
    this.descriptionTitle = environment.itemDetail.descriptionTitle;
    this.categories = [];
    this.loading = true;
    this.error = false;
    this.loadingMsg = environment.itemDetail.loadingMsg;
    this.errorMessage = environment.error.message;
    this.notFoundMessage = environment.itemDetail.notFoundMsg;
    this.redirectOnError = environment.error.redirectURL;
    this.redirectMessage = environment.error.redirectMessage;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.loading = true;
    this.error = false;
    this.apiService.fetchItemDetails(id).subscribe(
      (details) => {
        this.itemDetails = details;
        this.price = Utils.formatPrice(this.itemDetails.item.price);
        this.titleService.setTitle(this.itemDetails.item.title + ' - ' + this.price + ' en ' + environment.pageTitle);
        this.categories = details.categories;
      },
      (error) => {
        this.error = true;
        this.errorMessage = error.status === 404 ? this.notFoundMessage : environment.error.message;
        console.error(error);
      },
      () => {
        this.loading = false;
      });
  }

  onPurchase(): void {
    window.open(this.itemDetails.item.permalink, '_self');
  }
}
