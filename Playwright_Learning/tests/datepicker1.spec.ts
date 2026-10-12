import {expect,test,Page} from "@playwright/test"

async function selectDate(page:Page,targetDay:string,targetMonth:string,targetYear:string,flag:boolean)

{
    while(true){
   const currentMonth= await page.locator('.ui-datepicker-month').innerText()
   const currentYear=await page.locator('.ui-datepicker-year').innerText()
   if((currentMonth===targetMonth)&&(currentYear===targetYear))
   {
   

    break
   }
   if(flag){
    await page.locator('.ui-datepicker-next').click()
   }
   else
   {
    await page.locator('.ui-datepicker-prev').click()
    
   }
}
//single statement (alternative)
await page.locator('.ui-datepicker-calendar td',{hasText:targetDay}).first().click()
}

test("DatePicker",async({page})=>{
 await page.goto("https://sdetqa.vercel.app/autoplay.html")
        const logo=page.getByText("AutoPlay",{exact:true})
        await expect(logo).toBeVisible()
        await expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay")

        const dateFill=page.locator('#datepicker1')
        await expect(dateFill).toBeVisible()

       // Approach- 1
        //await dateFill.fill("12/18/2026")
        
        //Approach:2
        const targetDay="18"
        const targetMonth="June"
        const targetYear="2025"
        const flag=false

        await dateFill.click()
       await selectDate(page,targetDay,targetMonth,targetYear,flag)
        await expect(dateFill).toHaveValue("06/18/2025")

})