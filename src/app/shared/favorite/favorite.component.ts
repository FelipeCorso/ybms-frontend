import {Component, Input, OnInit} from '@angular/core';
import {MovieSerieDto} from "../../core/entities/movie-serie-dto";
import {FavoritesService, Operation} from "../../features/favorites/favorites.service";
import {MediaType} from "../../core/enums/media-type";
import {SelectedTab} from "../tab-list/tab-list.component";
import {TabListService} from "../tab-list/tab-list.service";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  @Input() item: MovieSerieDto;
  private activeTab: SelectedTab;

  constructor(private favoritesService: FavoritesService, private tabListService: TabListService) {

  }

  ngOnInit() {
    this.tabListService.onChange()
      .subscribe((tab: SelectedTab) => this.activeTab = tab);
  }

  onClickFavorite(): void {
    this.item.favorite = !this.item.favorite;
    let operation: Operation = this.item.favorite ? Operation.ADD : Operation.REMOVE;
    let mediaType: MediaType = this.activeTab === SelectedTab.MOVIES ? MediaType.MOVIE : MediaType.SERIE;
    this.favoritesService.addRemoveItemToFavorites(this.item, mediaType, operation);
    this.favoritesService.loadFavorites();
  }
}
