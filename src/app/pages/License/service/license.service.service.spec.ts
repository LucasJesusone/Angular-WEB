import { TestBed } from '@angular/core/testing';

import { License.ServiceService } from './license.service.service';

describe('License.ServiceService', () => {
  let service: License.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(License.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
