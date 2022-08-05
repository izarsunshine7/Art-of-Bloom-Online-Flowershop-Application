import { TestBed } from '@angular/core/testing';

import { FlowersPage } from './flowers.page';

describe('FlowersService', () => {
  let service: FlowersPage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowersPage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
