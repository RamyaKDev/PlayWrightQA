import {test,expect} from "@playwright/test"
test("Auth",async({browser})=>{
    const context=await browser.newContext({
        httpCredentials:{
         username:"admin",
         password:"admin"

        }
    
    })
    const page=await context.newPage()
    await page.goto("http://the-internet.herokuapp.com/basic_auth")
  //  await page.goto("http://admin:admin@the-internet.herokuapp.com/basic_auth")
   const t= page.locator('#content')
  await expect(t).toBeVisible()
  await expect(t).toContainText("Congratulations")
  await page.waitForTimeout(5000)
})