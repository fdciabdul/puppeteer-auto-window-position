# Puppeteer Auto Position

![demo](https://github.com/fdciabdul/puppeteer-auto-window-position/assets/31664438/ffb78a3c-9572-4a97-abc6-45a0139b6212)


A simple Puppeteer module that automatically sets window positions when launching new browsers.

## Installation

```bash
npm install puppeteer-auto-position
```


## Usage

```javascript
const { puppeteerWindow } = require('puppeteer-auto-position');

(async () => {
    const browsers = [];
    for(let i=0; i<6; i++){
        const browser = await puppeteerWindow(i);
        browsers.push(browser);
    }

    for(const browser of browsers){
        const page = await browser.newPage();
        await page.goto("https://google.com");
        // Do something with the page...
    }

})();
```


## Options

The `puppeteerWindow` function takes an optional second argument, an options object where you can specify the width, height, and screenWidth:


```javascript
const browser = await puppeteerWindow(i, {
    width: 800, // default is 640
    height: 600, // default is 480
    screenWidth: 1920 // default is 1920
});
```

