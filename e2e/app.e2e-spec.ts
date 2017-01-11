import { TalkSwaggerPage } from './app.po';

describe('talk-swagger App', function() {
  let page: TalkSwaggerPage;

  beforeEach(() => {
    page = new TalkSwaggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
