import {EventEmitter, Injectable, Output} from '@angular/core';
import {MediaType} from "../../core/enums/media-type";

@Injectable({
  providedIn: 'root'
})
export class TabListService {

  @Output()
  private tabChange: EventEmitter<MediaType> = new EventEmitter();

  constructor() {
  }

  change(mediaType: MediaType): void {
    this.tabChange.emit(mediaType);
  }

  onChange() {
    return this.tabChange;
  }
}
