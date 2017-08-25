import { CricApi2Page } from './app.po';

describe('cric-api2 App', () => {
  let page: CricApi2Page;

  beforeEach(() => {
    page = new CricApi2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
