import { TestBed } from '@angular/core/testing';

import { ReadFilesService } from './read-files.service';

describe('ReadFilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadFilesService = TestBed.get(ReadFilesService);
    expect(service).toBeTruthy();
  });
});
