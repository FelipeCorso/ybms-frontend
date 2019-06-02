import {Component, OnInit} from '@angular/core';
import {MovieSerieDto} from '../../core/entities/movie-serie-dto';
import {SidebarService} from './sidebar.service';

@Component({
  selector: 'sidebar-item',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  display = false;
  item: MovieSerieDto;

  constructor(private sidebarService: SidebarService) {
  }

  ngOnInit() {
    this.sidebarService.onShow()
      .subscribe((item: MovieSerieDto) => {
        this.item = item;
        this.display = true;
      });
  }

  onHide(): void {
    this.item = null;
  }
}
