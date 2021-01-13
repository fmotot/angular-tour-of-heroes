import { TestBed } from '@angular/core/testing';

import { UpSinceService } from './up-since.service';

describe('UpSinceService', () => {
  let service: UpSinceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpSinceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
