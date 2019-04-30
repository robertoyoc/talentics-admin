import { KitsModule } from './kits.module';

describe('KitsModule', () => {
  let kitsModule: KitsModule;

  beforeEach(() => {
    kitsModule = new KitsModule();
  });

  it('should create an instance', () => {
    expect(kitsModule).toBeTruthy();
  });
});
