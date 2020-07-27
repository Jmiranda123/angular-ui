import { TestBed } from '@angular/core/testing';

import { FarmerSearchCardService } from './farmer-search-card.service';

describe('FarmerSearchCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmerSearchCardService = TestBed.get(FarmerSearchCardService);
    expect(service).toBeTruthy();
  });
});
