import { TestBed } from '@angular/core/testing';

import { SecurityInterceptorService } from './security.interceptor.service';

describe('Security.InterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecurityInterceptorService = TestBed.get(SecurityInterceptorService);
    expect(service).toBeTruthy();
  });
});
