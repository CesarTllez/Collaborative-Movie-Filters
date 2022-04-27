import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecomendationComponent } from './recomendation/recomendation.component';

import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: "movies", component: TableComponent},
  {path: "suggestions", component: RecomendationComponent},
  {path: "", component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
