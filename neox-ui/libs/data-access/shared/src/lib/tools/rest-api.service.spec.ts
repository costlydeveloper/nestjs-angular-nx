import { TestBed } from '@angular/core/testing';

import { RestApiHelper } from './rest-api-helper.service';

describe('RestApiService', () => {
  let service: RestApiHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApiHelper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
