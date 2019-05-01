import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  waitForUrl(expectedUrlFragment) {
    browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return new RegExp(expectedUrlFragment).test(url);
      });
    }, 10000);
  }
}
