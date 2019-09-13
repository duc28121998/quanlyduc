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
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { Bai1Component } from './bai1/bai1.component';
import { PagemenuComponent } from './pagemenu/pagemenu.component';
import { Menu2Component } from './menu2/menu2.component';
import { TableBai1Component } from './table-bai1/table-bai1.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    Bai1Component,
    Baitap1Component,
    Baitap2Component,
    Baitap3Component,
    Baitap4Component,
    MenuComponent,
    Bai1Component,
    PagemenuComponent,
    Menu2Component,
    TableBai1Component,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    RatingModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      //Menu02 ben trong menu01:

      //menu01:
      { path: 'page1', component: MenuComponent },
      //menu02:
      { path: 'page2', component: Menu2Component },
      { path: 'page2/bai1', component: Bai1Component },
      {path : 'student/:id' , component: TableBai1Component},
      // { path: "", component: Bai1Component },
      { path: 'page1/baitap1', component: Baitap1Component },
      { path: 'page1/baitap2', component: Baitap2Component },
      { path: 'page1/baitap3', component: Baitap3Component },
      { path: 'page1/baitap4', component: Baitap4Component },
      { path: 'bai1', component: Bai1Component },
      { path: 'bai/4:productId', component: Baitap4Component },
      // { path: 'products/:productId', component: TestComponent },
      // { path: 'bai/5', component: Bai5Component },
      // { path: '**', redirectTo: '', pathMatch: 'full' }

    ], { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }