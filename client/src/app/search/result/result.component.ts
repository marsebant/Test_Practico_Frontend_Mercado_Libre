import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { ItemList } from 'src/app/interfaces/item';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  //#region Attributes
  items: ItemList[];
  categories: string[];
  loading: boolean;
  error: boolean;
  loadingMsg: string;
  noResultsMessage: string;
  noResultsOptions: string[];
  errorMessage: string;
  redirectOnError: string;
  redirectMessage: string;
  //#endregion

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private titleService: Title
  ) {
    this.items = [];
    this.categories = [];
    this.loading = true;
    this.error = false;
    this.loadingMsg = environment.resultPage.loadingMsg;
    this.noResultsMessage = environment.resultPage.noResultMessage;
    this.noResultsOptions = environment.resultPage.noResultOptions;
    this.errorMessage = environment.error.message;
    this.redirectOnError = environment.error.redirectURL;
    this.redirectMessage = environment.error.redirectMessage;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((searchWords) => {
      this.loading = true;
      this.error = false;
      const search = Utils.toTitleCase(searchWords.search);
      let title = environment.pageTitle;
      this.apiService.fetchItems(searchWords.search).subscribe(
        (data) => {
          this.categories = data.categories.length ? data.categories : [search];
          this.items = data.items;
          title = this.items.length ? search + ' en ' + title : title;
        },
        (error) => {
          this.error = true;
          console.error(error);
        },
        () => {
          this.loading = false;
          this.titleService.setTitle(title);
        }
      );
    });
  }
}
