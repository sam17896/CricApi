import { TestBed, inject } from '@angular/core/testing';

import { CricServiceService } from './cric-service.service';

describe('CricServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CricServiceService]
    });
  });

  it('should be created', inject([CricServiceService], (service: CricServiceService) => {
    expect(service).toBeTruthy();
  }));
});
