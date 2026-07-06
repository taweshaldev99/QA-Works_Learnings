const { test, expect } = require(`@playwright/test`)
test("Verify Application Ttile",async function({page}){

    await page.goto("https://google.com")

    const url = await page.url()

    console.log("Ttile is "+url)

    await expect(page).toHaveTitle("Google")
})