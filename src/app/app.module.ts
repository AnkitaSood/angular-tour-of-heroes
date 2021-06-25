import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { DoggoDetailComponent } from './doggo-details/doggo-detail.component';
import { DoggoSearchComponent } from './doggo-search/component/doggo-search.component';
import {DoggosComponent} from './doggos/doggos.component';
import {DoggoService} from './services/doggo.service';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true
    }),
     FontAwesomeModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DoggoSearchComponent,
    DoggosComponent,
    DoggoDetailComponent,
  ],
  providers: [DoggoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
