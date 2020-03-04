/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserAuthService } from './userAuth.service';

describe('Service: UserAuth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAuthService]
    });
  });

  it('should ...', inject([UserAuthService], (service: UserAuthService) => {
    expect(service).toBeTruthy();
  }));
});
