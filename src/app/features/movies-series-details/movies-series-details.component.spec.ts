import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSeriesDetailsComponent } from './movies-series-details.component';

describe('MoviesSeriesDetailsComponent', () => {
  let component: MoviesSeriesDetailsComponent;
  let fixture: ComponentFixture<MoviesSeriesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesSeriesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesSeriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
