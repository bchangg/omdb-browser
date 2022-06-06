import { TestBed } from '@angular/core/testing';

import { OMDBService } from './omdb.service';

describe('OmdbService', () => {
  let service: OMDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OMDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
