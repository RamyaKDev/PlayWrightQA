import {test,expect} from "@playwright/test"
test("XPAth",async({page})=>{
await page.goto("https://demowebshop.tricentis.com/")
const search1=page.locator('//input[@value="Search store"]')
   await search1.fill("com")

})