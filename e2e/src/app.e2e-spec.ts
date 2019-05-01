import { AppPage } from './app.po';
import { by, element, browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should create a new kit', () => {
    browser.ignoreSynchronization = true;
    browser.get('/kits');
    page.waitForUrl('/kits');
    expect(browser.getCurrentUrl()).toContain('kits');
    let buttons = element.all(by.css('button'));
    buttons.get(0).click();
    const inputs = element.all(by.css('input'));
    const textArea = element.all(by.css('textarea'));
    inputs.get(0).sendKeys('0Tests');
    inputs.get(1).sendKeys('12.12');
    textArea.get(0).sendKeys('Testeando ando');
    buttons = element.all(by.css('button'));
    buttons.get(0).click();
    const tds = element.all(by.css('td'));
    browser.sleep(3000);
    return expect(tds.get(0).getText()).toBe('0Tests');
  });
  
});
