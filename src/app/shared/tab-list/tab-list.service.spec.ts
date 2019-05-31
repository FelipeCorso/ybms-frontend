import { TestBed } from '@angular/core/testing';

import { TabListService } from './tab-list.service';

describe('TabListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabListService = TestBed.get(TabListService);
    expect(service).toBeTruthy();
  });
});
