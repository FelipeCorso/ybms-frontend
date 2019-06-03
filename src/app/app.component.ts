import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidebarInactive = true;
  title = 'YBMs';
  subTitle = '(Your beloved movies and series)';

  hideSidebar(): void {
    this.sidebarInactive = true;
  }
}
