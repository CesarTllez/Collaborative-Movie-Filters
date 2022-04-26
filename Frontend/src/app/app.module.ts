import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TableComponent } from './table/table.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { PrimeNGModule } from 'src/primeNG/prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent

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
    PrimeNGModule


  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
