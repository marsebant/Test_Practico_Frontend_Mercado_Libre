import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CategoriesBarComponent } from './categories-bar/categories-bar.component';
import { SearchItemComponent } from './search/item/search-item.component';
import { ItemDetailComponent } from './search/detail/item-detail.component';
import { ResultComponent } from './search/result/result.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { HomeComponent } from './commons/home/home.component';
import { LoadingComponent } from './commons/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    CategoriesBarComponent,
    SearchItemComponent,
    ItemDetailComponent,
    ResultComponent,
    MainComponent,
    NotFoundComponent,
    HomeComponent,
    LoadingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
