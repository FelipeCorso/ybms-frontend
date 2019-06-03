import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-details-trailers-item',
  templateUrl: './details-trailers-item.component.html',
  styleUrls: ['./details-trailers-item.component.scss']
})
export class DetailsTrailersItemComponent implements OnInit {
  @Input() item: any;

  constructor() {
  }

  ngOnInit() {
  }

}
