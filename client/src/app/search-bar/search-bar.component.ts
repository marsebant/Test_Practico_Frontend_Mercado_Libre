import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  logoTitle: string;
  searchButtonTitle: string;
  placeholder: string;
  searchWords: string;

  constructor(
    private titleService: Title,
    private router: Router
  ) {
    this.logoTitle = environment.searchBar.logoTitle;
    this.searchButtonTitle = environment.searchBar.searchButtonTitle;
    this.placeholder = environment.searchBar.placeholder;
    this.searchWords = '';
  }

  ngOnInit(): void {}

  onClickLogo(): void {
    // Change page title and redirect to home
    this.searchWords = '';
    this.titleService.setTitle(environment.pageTitle);
    this.router.navigate(['/']);
  }

  onSearch(): void {
    // If any key send search words
    if (this.searchWords) {
      this.router.navigate(['/items'], {queryParams: {search: this.searchWords}});
    }
  }
}
