import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TabListService} from "./tab-list.service";
import {MediaTypeDto, MoviesSeriesDto} from "../../core/entities/movies-series-dto";
import {MediaService} from "../../core/services/media.service";
import {MediaType} from "../../core/enums/media-type";
import {SelectItem} from "primeng/api";
import {MovieSerieDto} from "../../core/entities/movie-serie-dto";

@Component({
  selector: 'tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss']
})
export class TabListComponent implements OnChanges, OnInit {

  @Input() data: MoviesSeriesDto;

  activeTabView: MediaType = MediaType.MOVIE;
  mediaType = MediaType;
  item: MediaTypeDto;
  selectedFilter: SelectItem;
  filters: SelectItem[];

  constructor(private mediaService: MediaService, private tabListService: TabListService) {
  }

  ngOnInit() {
    this.filters = [
      {label: 'Released date', value: 'release_date'},
      {label: 'Name', value: 'name'}
    ];
    this.initTab();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      this.data = changes.data.currentValue;
      this.updateItems();
    }
  }

  onTabChange(event: any) {
    this.selectedFilter = null;
    this.activeTabView = event.index === 0 ? MediaType.MOVIE : MediaType.SERIE;
    this.tabListService.change(this.activeTabView);
    this.updateItems();
  }

  onFilterChange($event): void {
    let sortField = $event.value;
    if (sortField) {
      if (sortField === 'name') {
        switch (this.activeTabView) {
          case MediaType.MOVIE:
            sortField = 'original_title';
            break;
          case MediaType.SERIE:
            sortField = 'original_name';
            break;
        }
      }
      this.item.results.sort((a: MovieSerieDto, b: MovieSerieDto) => {
        let fieldA = a[sortField];
        let fieldB = b[sortField];
        if (sortField === 'release_date') {
          // desc order
          fieldA = Date.parse(b[sortField]);
          fieldB = Date.parse(a[sortField]);
        }
        return fieldA !== fieldB ? fieldA < fieldB ? -1 : 1 : 0;
      });
    }
  }

  onPageChange($event): void {
    this.mediaService.getMediaTrending(this.activeTabView, undefined, $event.page + 1)
      .subscribe((media: MediaTypeDto) => {
        switch (this.activeTabView) {
          case MediaType.MOVIE:
            this.data.movies = media;
            break;
          case MediaType.SERIE:
            this.data.series = media;
            break;
        }
        this.updateItems();
      });
  }

  private initTab() {
    this.onTabChange({index: 0});
  }

  private updateItems(): void {
    switch (this.activeTabView) {
      case MediaType.MOVIE:
        this.item = this.data.movies;
        break;
      case MediaType.SERIE:
        this.item = this.data.series;
        break;
    }
  }
}

export enum SelectedTab {
  MOVIES, SERIES
}
