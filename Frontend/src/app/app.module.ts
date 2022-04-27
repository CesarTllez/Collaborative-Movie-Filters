import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { TableComponent } from './table/table.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { PrimeNGModule } from 'src/primeNG/prime-ng/prime-ng.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { RecomendationComponent } from './recomendation/recomendation.component';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RecomendationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    NoopAnimationsModule,
    MatPaginatorModule,
    MatSliderModule,
    FormsModule,
    MatSortModule,
    PrimeNGModule


  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
