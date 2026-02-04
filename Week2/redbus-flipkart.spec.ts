import test, {chromium, webkit} from '@playwright/test';

test("Launch Edge browser",async()=>{

    const browser = await chromium.launch({channel:'msedge',headless:false})

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.redbus.in")
    await page.waitForTimeout(5000)
})

test("Launch Webkit browser",async()=>{

    const browser = await webkit.launch({headless:false})
    const context = await browser.newContext()
    const page1 = await context.newPage()
    await page1.goto("https://www.flipkart.com")
    await page1.waitForTimeout(5000)
})
