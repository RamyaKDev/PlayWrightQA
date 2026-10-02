import {test,expect} from "@playwright/test"
test("css selectors",async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/')
   // const search=page.locator('#small-searchterms')
   // const search=page.locator('.search-box-text')
  // const search=page.locator('[value="Search store"]')
  //const search=page.locator('.search-box-text[value="Search store"]')
 const search=page.locator('[value*="Search "]')
    search.fill("14.1-inch Laptop")
    await page.locator('input[value="Search"]').click()
    await page.waitForTimeout(2000)
    const a=page.locator('h2.product-title a')
    await expect(a).toHaveText('14.1-inch Laptop')

    await page.close()
})