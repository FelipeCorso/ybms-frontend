import {Injectable, Output} from '@angular/core';
import {MediaType} from "../../core/enums/media-type";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TabListService {

  @Output()
  private tabChange: BehaviorSubject<MediaType> = new BehaviorSubject<MediaType>(MediaType.MOVIE);

  constructor() {
  }

  change(mediaType: MediaType): void {
    this.tabChange.next(mediaType);
  }

  onChange() {
    return this.tabChange;
  }
}
