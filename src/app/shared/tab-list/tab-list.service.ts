import {EventEmitter, Injectable, Output} from '@angular/core';
import {SelectedTab} from "./tab-list.component";

@Injectable({
  providedIn: 'root'
})
export class TabListService {

  @Output()
  private tabChange: EventEmitter<SelectedTab> = new EventEmitter();

  constructor() {
  }

  change(tab: SelectedTab): void {
    this.tabChange.emit(tab);
  }

  onChange() {
    return this.tabChange;
  }
}
