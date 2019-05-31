import {Component, OnInit} from '@angular/core';
import {FavoritesService} from "./favorites.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ybms-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  data: any = {};

  constructor(private activatedRoute: ActivatedRoute, private favoritesService: FavoritesService) {
  }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe((data: any) => this.onRouteDataChange(data));

    this.favoritesService.onFavoritesChange()
      .subscribe(() => this.loadFavorites());
  }

  private onRouteDataChange(data: any) {
    this.data = data.favorites;
  }

  private loadFavorites() {
    this.data = this.favoritesService.getFavorites();
  }
}
