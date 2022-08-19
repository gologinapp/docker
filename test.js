const puppeteer = require('puppeteer-core');

(async () =>{
    const browser = await puppeteer.connect({
        browserURL: 'http://127.0.0.1:3000', 
        ignoreHTTPSErrors: true,
    });

    let pages = await browser.pages();
    let page  = pages[0];
    await page.goto('https://myip.link/mini');   
    console.log(await page.content());
})();
