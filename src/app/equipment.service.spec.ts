import { TestBed, inject } from '@angular/core/testing';

import { EquipmentService } from './equipment.service';

describe('EquipmentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquipmentService]
    });
  });

  it('should ...', inject([EquipmentService], (service: EquipmentService) => {
    expect(service).toBeTruthy();
  }));
});
