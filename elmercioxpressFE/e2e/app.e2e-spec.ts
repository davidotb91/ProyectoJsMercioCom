import { ElmercioxpressFEPage } from './app.po';

describe('elmercioxpress-fe App', () => {
  let page: ElmercioxpressFEPage;

  beforeEach(() => {
    page = new ElmercioxpressFEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
