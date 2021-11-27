import { TestBed } from '@angular/core/testing';

import { MeenalTasksService } from './meenal-tasks.service';

describe('MeenalTasksService', () => {
  let service: MeenalTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeenalTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
