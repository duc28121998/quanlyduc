import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { Baitap1Component } from './baitap1/baitap1.component';
import { Baitap2Component } from './baitap2/baitap2.component';
import { Baitap3Component } from './baitap3/baitap3.component';
import { Baitap4Component } from './baitap4/baitap4.component';




@NgModule({
  declarations: [
    AppComponent,
    Baitap1Component,
    Baitap2Component,
    Baitap3Component,
    Baitap4Component

  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }