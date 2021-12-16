import { TestBed } from '@angular/core/testing';

import { P2Service } from './p2.service';

describe('P2Service', () => {
  let service: P2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(P2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
