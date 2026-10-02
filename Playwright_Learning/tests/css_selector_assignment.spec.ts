import {test,expect} from "@playwright/test"

test.describe("Test Suite for css selector assignment",()=>{
    test("application launching",async({page})=>{       
        await page.goto("https://demowebshop.tricentis.com/")

        const logo=  page.locator('img[alt="Tricentis Demo Web Shop"]')
        await expect(logo).toBeVisible()

        const com=page.locator('li > a[href*="computer"]')
        const count1:number=await com.count()
         expect(count1).toBeGreaterThan(0)
        //await expect(com).toHaveCount(3)
        
        const p1=await com.first().textContent()
        const p2=await com.nth(1).textContent()
        const p3=await com.nth(2).textContent()
        console.log(p1,p2,p3)
    })
})
