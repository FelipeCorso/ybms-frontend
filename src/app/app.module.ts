import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

import {AppRoutingModule, EmptyComponent} from './app-routing.module';
import {HomeComponent} from './features/home/home.component';
import {FavoritesComponent} from './features/favorites/favorites.component';
import {ListMoviesSeriesComponent} from './shared/list-movies-series/list-movies-series.component';
import {ListItemComponent} from './shared/list-movies-series/components/list-item/list-item.component';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {TabListComponent} from './shared/tab-list/tab-list.component';
import {DropdownModule, PaginatorModule, SidebarModule, TabViewModule} from 'primeng/primeng';
import {AboutComponent} from './features/about/about.component';
import {HttpInterceptorModule} from './core/http-interceptors/http-interceptor.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FavoriteComponent} from './shared/favorite/favorite.component';
import {TableModule} from 'primeng/table';
import {MoviesSeriesDetailsComponent} from './features/movies-series-details/movies-series-details.component';
import {TopMovieSeriesComponent} from './shared/top-movie-series/top-movie-series.component';
import {DetailsHomeComponent} from './features/movies-series-details/components/details-home/details-home.component';
import {DetailsReviewsComponent} from './features/movies-series-details/components/details-reviews/details-reviews.component';
import {DetailsCastComponent} from './features/movies-series-details/components/details-cast/details-cast.component';
import {DetailsCastItemComponent} from './features/movies-series-details/components/details-cast/components/details-cast-item/details-cast-item.component';
import {DetailsTrailersComponent} from './features/movies-series-details/components/details-trailers/details-trailers.component';
import {DetailsTrailersItemComponent} from './features/movies-series-details/components/details-trailers/components/details-trailers-item/details-trailers-item.component';
import {SafePipe} from './shared/pipes/safe.pipe';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DropdownModule,
    PaginatorModule,
    TableModule,
    TabViewModule,
    HttpInterceptorModule,
    SidebarModule
  ],
  declarations: [
    AboutComponent,
    AppComponent,
    EmptyComponent,
    FavoritesComponent,
    HomeComponent,
    ListMoviesSeriesComponent,
    ListItemComponent,
    SidebarComponent,
    TabListComponent,
    FavoriteComponent,
    MoviesSeriesDetailsComponent,
    TopMovieSeriesComponent,
    DetailsHomeComponent,
    DetailsReviewsComponent,
    DetailsCastComponent,
    DetailsCastItemComponent,
    DetailsTrailersComponent,
    DetailsTrailersItemComponent,
    SafePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
