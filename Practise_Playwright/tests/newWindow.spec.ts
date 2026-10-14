
import {test,expect} from "@playwright/test"
test("New tab",async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://sdetqa.vercel.app/autoplay")
   const tab= page.locator('button',{hasText:"New Window"})
   const [newTab]=await Promise.all([
    context.waitForEvent('page'),
    tab.click()
   ])
   await page.waitForTimeout(5000)
   console.log(await newTab.title())
   await expect(newTab).toHaveTitle(/Playwright/)
   await expect(newTab).toHaveURL("https://playwright.dev/")
   await context.close()
  
})


