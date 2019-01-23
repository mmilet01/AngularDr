import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AppRoutingModule } from './app-routing.module';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { OcjeneComponent } from './components/ocjene/ocjene.component';
import { RecenzijeAddComponent } from './components/recenzije-add/recenzije-add.component';
import { HttpClientModule } from '@angular/common/http';
import { FavAddComponent } from './components/fav-add/fav-add.component';
import { GetGradeComponent } from './components/get-grade/get-grade.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    ProductDetailsComponent,
    FavoriteComponent,
    OcjeneComponent,
    RecenzijeAddComponent,
    FavAddComponent,
    GetGradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
