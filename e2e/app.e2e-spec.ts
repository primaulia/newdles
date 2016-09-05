import { NewdlesPage } from './app.po';

describe('newdles App', function() {
  let page: NewdlesPage;

  beforeEach(() => {
    page = new NewdlesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
