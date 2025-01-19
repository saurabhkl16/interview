import { TestBed } from '@angular/core/testing';

import { SaurabhService } from './saurabh.service';

describe('SaurabhService', () => {
  let service: SaurabhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaurabhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
