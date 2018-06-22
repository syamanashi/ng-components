import { TestBed, inject } from '@angular/core/testing';

import { NgComponentsSyamanashiService } from './ng-components-syamanashi.service';

describe('NgComponentsSyamanashiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgComponentsSyamanashiService]
    });
  });

  it('should be created', inject([NgComponentsSyamanashiService], (service: NgComponentsSyamanashiService) => {
    expect(service).toBeTruthy();
  }));
});
