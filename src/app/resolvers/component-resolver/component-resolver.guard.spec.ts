import { TestBed, async, inject } from '@angular/core/testing';

import { ComponentResolverGuard } from './component-resolver.guard';

describe('ComponentResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentResolverGuard]
    });
  });

  it('should ...', inject([ComponentResolverGuard], (guard: ComponentResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
