import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TabListService} from "./tab-list.service";

@Component({
  selector: 'tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss']
})
export class TabListComponent implements OnChanges, OnInit {

  @Input() data: any;

  activeTabView: number;
  items: any;

  constructor(private tabListService: TabListService) {
  }

  ngOnInit() {
    this.initTab();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue && !changes.data.firstChange) {
      this.data = changes.data.currentValue;
      this.updateItems();
    }
  }

  onTabChange(event: any) {
    this.activeTabView = event.index;
    this.tabListService.change(this.activeTabView);
    this.updateItems();
  }

  private initTab() {
    this.onTabChange({index: 0});
  }

  private updateItems(): void {
    switch (this.activeTabView) {
      case SelectedTab.MOVIES:
        this.items = this.data.movies;
        break;
      case SelectedTab.SERIES:
        this.items = this.data.series;
        break;
    }
  }
}

export enum SelectedTab {
  MOVIES, SERIES
}
