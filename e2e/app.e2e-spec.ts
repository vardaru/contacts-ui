import { ContactsUiPage } from './app.po';

describe('contacts-ui App', function() {
  let page: ContactsUiPage;

  beforeEach(() => {
    page = new ContactsUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
