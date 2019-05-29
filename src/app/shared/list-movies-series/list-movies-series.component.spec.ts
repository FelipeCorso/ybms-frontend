import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoviesSeriesComponent } from './list-movies-series.component';

describe('ListMoviesSeriesComponent', () => {
  let component: ListMoviesSeriesComponent;
  let fixture: ComponentFixture<ListMoviesSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMoviesSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMoviesSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
