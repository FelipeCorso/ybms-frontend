import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {MessagesComponent} from './messages/messages.component';

import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from "./features/home/home.component";
import {FavoritesComponent} from "./features/favorites/favorites.component";
import {ListMoviesSeriesComponent} from "./shared/list-movies-series/list-movies-series.component";
import {ListItemComponent} from "./shared/list-movies-series/components/list-item/list-item.component";
import {SidebarComponent} from "./shared/sidebar/sidebar.component";
import {TabListComponent} from "./shared/tab-list/tab-list.component";
import {SidebarModule, TabViewModule} from "primeng/primeng";
import {AboutComponent} from './features/about/about.component';
import {HttpInterceptorModule} from "./core/http-interceptors/http-interceptor.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FavoriteComponent } from './shared/favorite/favorite.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TabViewModule,
    HttpInterceptorModule,
    SidebarModule
  ],
  declarations: [
    AboutComponent,
    AppComponent,
    DashboardComponent,
    FavoritesComponent,
    HeroesComponent,
    HeroDetailComponent,
    HomeComponent,
    MessagesComponent,
    ListMoviesSeriesComponent,
    ListItemComponent,
    SidebarComponent,
    TabListComponent,
    FavoriteComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
