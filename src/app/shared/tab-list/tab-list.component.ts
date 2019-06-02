import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TabListService} from "./tab-list.service";
import {MediaTypeDto, MoviesSeriesDto} from "../../core/entities/movies-series-dto";
import {MediaService} from "../../core/services/media.service";
import {MediaType} from "../../core/enums/media-type";

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

  constructor(private mediaService: MediaService, private tabListService: TabListService) {
  }

  ngOnInit() {
    this.initTab();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      this.data = changes.data.currentValue;
      this.updateItems();
    }
  }

  onTabChange(event: any) {
    this.activeTabView = event.index === 0 ? MediaType.MOVIE : MediaType.SERIE;
    this.tabListService.change(this.activeTabView);
    this.updateItems();
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
