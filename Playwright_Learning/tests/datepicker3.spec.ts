import {expect,test,Page} from "@playwright/test"
test("DatePicker",async({page})=>{
 await page.goto("https://sdetqa.vercel.app/autoplay.html")
        const logo=page.getByText("AutoPlay",{exact:true})
        await expect(logo).toBeVisible()
        await expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay")

        const startDate=page.locator('input#start-date')
        await expect(startDate).toBeVisible()
        const endDate=page.locator('input#end-date')
        await expect(endDate).toBeVisible()
        await startDate.fill('2027-02-05')
       await endDate.fill('2027-05-07')

      const subButton= page.getByRole('button', { name: 'Submit' }).last()
      //const subButton=page.locator('button[fdprocessedid="rd7pt"]')
      await expect(subButton).toBeVisible()
        await expect(subButton).toBeEnabled()
       await subButton.click()

       const text=page.locator('#result')
       await expect(text).toBeVisible()
})