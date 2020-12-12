import { TestBed } from '@angular/core/testing';

import { ImgRegisterService } from './img-register.service';

describe('ImgRegisterService', () => {
  let service: ImgRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
