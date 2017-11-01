import { PetMarketPage } from './app.po';

describe('pet-market App', function() {
  let page: PetMarketPage;

  beforeEach(() => {
    page = new PetMarketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
