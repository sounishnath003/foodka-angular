/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddressDeliverTimeService } from './addressDeliverTime.service';

describe('Service: AddressDeliverTime', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressDeliverTimeService]
    });
  });

  it('should ...', inject([AddressDeliverTimeService], (service: AddressDeliverTimeService) => {
    expect(service).toBeTruthy();
  }));
});
