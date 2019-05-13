import { TestBed, async, inject } from '@angular/core/testing';

import { KitResolverGuard } from './kit-resolver.guard';

describe('KitResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KitResolverGuard]
    });
  });

  it('should ...', inject([KitResolverGuard], (guard: KitResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
