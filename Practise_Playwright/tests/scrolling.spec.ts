import {test,expect} from "@playwright/test"
test("Scroll by pixel",async({page})=>{
   await page.goto("https://www.worldometers.info/geography/flags-of-the-world/")
   await page.evaluate(()=>window.scrollBy(0,2000))
await page.waitForTimeout(2000)
   await page.evaluate(()=>window.scrollTo(0,700))

})

test("Scroll by element",async({page})=>{
   await page.goto("https://www.worldometers.info/geography/flags-of-the-world/")
   const t=page.getByText(" India ",{exact:true})
   await t.scrollIntoViewIfNeeded()
   await expect(t).toBeVisible()
})

test("Bottom of the page",async({page})=>{
   await page.goto("https://www.worldometers.info/geography/flags-of-the-world/")
   await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight))
   console.log( await page.evaluate(()=> document.body.scrollHeight))

    await page.evaluate(()=>window.scrollTo(0,- document.body.scrollHeight))
})