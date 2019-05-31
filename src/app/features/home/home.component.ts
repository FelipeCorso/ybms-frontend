import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MediaType} from "../../core/enums/media-type";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mediaType = MediaType;
  data: any = {};

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe((data: any) => this.onRouteDataChange(data));
  }

  private onRouteDataChange(data: any) {
    this.data = data.mediaTrending;
  }
}
