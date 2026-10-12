import {expect,test,Page} from "@playwright/test"
test("DatePicker",async({page})=>{
 await page.goto("https://sdetqa.vercel.app/autoplay.html")
        const logo=page.getByText("AutoPlay",{exact:true})
        await expect(logo).toBeVisible()
        await expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay")

        const dateFill=page.locator('#datepicker2')
        await expect(dateFill).toBeVisible()
       await dateFill.click()
        const month=page.locator('select.ui-datepicker-month')
        const year=page.locator('select.ui-datepicker-year')
        const day=await page.locator('table.ui-datepicker-calendar td').all()
    let dat='8'
       await month.selectOption('6')
       await year.selectOption('2027')
      // await page.locator('table.ui-datepicker-calendar a', { hasText: dat }).first().click(); 
        
        for(let r of day){
           let d=await r.innerText()
           if(d===dat){
              await r.click()
              break
           }
        }
        await expect(dateFill).toHaveValue('08/07/2027')
})