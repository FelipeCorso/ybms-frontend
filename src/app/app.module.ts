import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavoritesComponent } from './features/favorites/favorites.component';
import { ListMoviesSeriesComponent } from './shared/list-movies-series/list-movies-series.component';
import { TabViewModule } from 'primeng/primeng';
import { ListItemComponent } from './shared/list-movies-series/components/list-item/list-item.component';
import { SidebarItemComponent } from './shared/list-movies-series/components/list-item/components/sidebar/sidebar.component';
import { TabListComponent } from './shared/tab-list/tab-list.component';
import { HomeComponent } from './features/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    ListMoviesSeriesComponent,
    ListItemComponent,
    SidebarItemComponent,
    TabListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
