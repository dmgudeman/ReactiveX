import { LindquistVideoTutorialPage } from './app.po';

describe('lindquist-video-tutorial App', function() {
  let page: LindquistVideoTutorialPage;

  beforeEach(() => {
    page = new LindquistVideoTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
