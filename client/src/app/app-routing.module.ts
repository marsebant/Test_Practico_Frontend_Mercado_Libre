import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultComponent } from './search/result/result.component';
import { ItemDetailComponent } from './search/detail/item-detail.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { HomeComponent } from './commons/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'items', component: ResultComponent },
      { path: 'items/:id', component: ItemDetailComponent },
      { path: '**', component: NotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
