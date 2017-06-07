import { FrondendPage } from './app.po';

describe('frondend App', () => {
  let page: FrondendPage;

  beforeEach(() => {
    page = new FrondendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
