import {test,expect} from "@playwright/test"
test("download files",async({page})=>{
    
    await page.goto("https://sdetqa.vercel.app/autoplay")
    const but= page.locator('button',{hasText:"Download File"})
   const [download]=await Promise.all([
    page.waitForEvent('download'),
    but.click()
   ])
   console.log(download.suggestedFilename())
    expect(download.suggestedFilename()).toContain("sample.txt")

   const path="tests/downloads/"
   await download.saveAs("path")
   
})

test("Open PDF",async({page})=>{
    
    await page.goto("https://sdetqa.vercel.app/autoplay")
    const but= page.locator('button',{hasText:"Open PDF"})
   const [open]=await Promise.all([
    page.context().waitForEvent('page'),
    but.click()
   ])
   
   expect(open).toBeTruthy()
})

        
          