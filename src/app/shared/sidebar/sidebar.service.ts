import {EventEmitter, Injectable, Output} from '@angular/core';
import {MovieSerieDto} from "../../core/entities/movie-serie-dto";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  @Output()
  private itemChange: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  show(item: MovieSerieDto): void {
    this.itemChange.emit(item);
  }

  onShow() {
    return this.itemChange;
  }
}
