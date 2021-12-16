import { TestBed } from '@angular/core/testing';

import { P12Service } from './p12.service';

describe('P12Service', () => {
  let service: P12Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(P12Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
