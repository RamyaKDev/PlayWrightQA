import {test,expect} from "@playwright/test"
test("Flipkart",async({page})=>{

    //1. Open Flipkart Website
    await page.goto("https://www.flipkart.com/")
    await expect(page).toHaveURL("https://www.flipkart.com/")

   const close= page.locator('span.b3wTlE')
   if(await close.isVisible()){
        await close.click()
   }
    //2. Search for a Product
   const search= page.getByPlaceholder("Search for Products, Brands and More").first()
    await expect(search).toBeVisible()
    await expect(search).toBeEnabled()

    search.fill("smart")
    page.waitForTimeout(5000)

       const options = page.locator("ul > li");
    await expect(options.first()).toBeVisible();
    const count= await options.count()
    console.log(count)
    if(await options.nth(4).isVisible())
        console.log(await options.nth(4).innerText())

    for(let i=0;i<count;i++){
        console.log(await options.nth(i).innerText())
    }
})