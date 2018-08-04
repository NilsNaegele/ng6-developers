import { TestBed, inject } from '@angular/core/testing';

import { UsersSearchService } from './users-search.service';

describe('UsersSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersSearchService]
    });
  });

  it('should be created', inject([UsersSearchService], (service: UsersSearchService) => {
    expect(service).toBeTruthy();
  }));
});
