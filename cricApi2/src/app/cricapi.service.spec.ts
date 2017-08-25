import { TestBed, inject } from '@angular/core/testing';

import { CricapiService } from './cricapi.service';

describe('CricapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CricapiService]
    });
  });

  it('should be created', inject([CricapiService], (service: CricapiService) => {
    expect(service).toBeTruthy();
  }));
});
