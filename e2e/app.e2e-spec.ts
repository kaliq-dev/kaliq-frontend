import { KaliqFrontendPage } from './app.po';

describe('kaliq-frontend App', () => {
  let page: KaliqFrontendPage;

  beforeEach(() => {
    page = new KaliqFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
