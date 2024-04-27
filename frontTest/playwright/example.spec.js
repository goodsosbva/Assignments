const {test, expect} = require('@playwright/test');
test('basic test', async ({page}) => {
    await page.goto('https://github.com/login');
    await page.fill('input[name="login"]', 'goodsosbva');
    await page.fill('input[name="password"', '123123');
    await page.click('text=Sigin in');
})