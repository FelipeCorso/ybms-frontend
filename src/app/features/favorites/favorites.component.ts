import {Component, OnDestroy, OnInit} from '@angular/core';
import {FavoritesService} from './favorites.service';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'ybms-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy {
  data: any = {};

  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(private activatedRoute: ActivatedRoute, private favoritesService: FavoritesService) {
  }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe((data: any) => this.onRouteDataChange(data));

    this.favoritesService.onFavoritesChange()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => this.loadFavorites());
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private onRouteDataChange(data: any) {
    this.data = data.favorites;
  }

  private loadFavorites() {
    this.data = this.favoritesService.getFavorites();
  }
}
