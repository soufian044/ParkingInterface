import { ParkingInterfacePage } from './app.po';

describe('parking-interface App', () => {
  let page: ParkingInterfacePage;

  beforeEach(() => {
    page = new ParkingInterfacePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
