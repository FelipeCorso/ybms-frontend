import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-details-cast-item',
  templateUrl: './details-cast-item.component.html',
  styleUrls: ['./details-cast-item.component.scss']
})
export class DetailsCastItemComponent implements OnInit {
  @Input() item: any;

  constructor() {
  }

  ngOnInit() {
  }

}
