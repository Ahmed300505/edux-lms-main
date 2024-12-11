import { TestBed } from '@angular/core/testing';

import { StudyYearService } from './study-year.service';

describe('StudyYearService', () => {
  let service: StudyYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudyYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
