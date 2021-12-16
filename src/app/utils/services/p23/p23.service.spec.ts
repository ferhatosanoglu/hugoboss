import { TestBed } from '@angular/core/testing';

import { P23Service } from './p23.service';

describe('P23Service', () => {
  let service: P23Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(P23Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
