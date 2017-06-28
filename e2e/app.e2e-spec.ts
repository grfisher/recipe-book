import { UploadFilePage } from './app.po';

describe('upload-file App', () => {
  let page: UploadFilePage;

  beforeEach(() => {
    page = new UploadFilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
