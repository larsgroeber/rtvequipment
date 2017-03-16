import { RTVEquipmentPage } from './app.po';

describe('rtvequipment App', () => {
  let page: RTVEquipmentPage;

  beforeEach(() => {
    page = new RTVEquipmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
