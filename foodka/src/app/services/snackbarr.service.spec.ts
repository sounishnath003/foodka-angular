/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SnackbarrService } from './snackbarr.service';

describe('Service: Snackbarr', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnackbarrService]
    });
  });

  it('should ...', inject([SnackbarrService], (service: SnackbarrService) => {
    expect(service).toBeTruthy();
  }));
});
