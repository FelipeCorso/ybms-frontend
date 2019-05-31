import {Component, Input, OnInit} from '@angular/core';
import {MovieSerieDto} from '../../../../core/entities/movie-serie-dto';
import {SidebarService} from '../../../sidebar/sidebar.service';
import {Router} from "@angular/router";

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() item: MovieSerieDto;

  constructor(private router: Router, private sidebarService: SidebarService) {
  }

  ngOnInit() {
  }

  onClickItem(): void {
    this.sidebarService.show(this.item);
  }

  onClickDetails(): void {
    this.router.navigate([`details/${this.item.id}`]);
  }
}
