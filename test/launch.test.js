/* eslint-disable no-undef */
const puppeteer = require('puppeteer');
const { puppeteerWindow } = require('../src');

jest.mock('puppeteer', () => ({
  launch: jest.fn(),
}));

describe('launchBrowserWithPosition', () => {
  it('should launch a browser with correct position and size', async () => {
    const index = 1;
    const options = { width: 800, height: 600, screenWidth: 1920 };

    // Execute the function
    await puppeteerWindow(index, options);

    // Verify puppeteer.launch was called with correct parameters
    expect(puppeteer.launch).toHaveBeenCalledWith({
      headless: false,
      args: ['--window-position=800,0', '--window-size=800,600'],
    });
  });
});
