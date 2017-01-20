import { SelectControlReactivePage } from './app.po';

describe('select-control-reactive App', function() {
  let page: SelectControlReactivePage;

  beforeEach(() => {
    page = new SelectControlReactivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
