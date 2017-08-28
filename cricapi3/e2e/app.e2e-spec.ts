import { Cricapi3Page } from './app.po';

describe('cricapi3 App', () => {
  let page: Cricapi3Page;

  beforeEach(() => {
    page = new Cricapi3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
