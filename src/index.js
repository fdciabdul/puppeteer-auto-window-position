const puppeteer = require('puppeteer');

/**
 * Function to launch a Puppeteer browser with specific position and size.
 * @param {number} index The index number of the browser.
 * @param {Object} [options] Options for positioning and sizing.
 * @param {number} [options.width=640] The width of the browser window.
 * @param {number} [options.height=480] The height of the browser window.
 * @param {number} [options.screenWidth=1920] The width of the screen.
 * @returns {Promise<puppeteer.Browser>} The launched browser.
 */
async function puppeteerWindow(index, options = {}) {
    const width = options.width || 640;
    const height = options.height || 480;
    const screenWidth = options.screenWidth || 1920;

    const cols = Math.floor(screenWidth / width);
    const x = (index % cols) * width;
    const y = Math.floor(index / cols) * height;

    let browser;
    try {
        browser = await puppeteer.launch({
            headless: false,
            args: [`--window-position=${x},${y}`, `--window-size=${width},${height}`]
        });
    } catch (error) {
        console.error(`Failed to launch browser: ${error}`);
        throw error;
    }

    return browser;
}

module.exports = {
    puppeteerWindow
};