import {expect,test,Page,Locator} from "@playwright/test"


async function selectDate(page:Page,dateInputSelector:Locator,targetDate:string){
/*
Create a generic reusable function that:
•Opens the date picker
•Selects Year
•Selects Month
 Selects Day
•Works for any date field
*/




}
async function selectDateOfBirth(page:Page){
    const dob=page.locator('#dob')
await dob.click()
const month=page.locator('select.ui-datepicker-month')
//await expect(month).toBeVisible()
//const month= page.getByText('Jan', { exact: true })
        const year=page.locator('select.ui-datepicker-year')
        const day=await page.locator('table.ui-datepicker-calendar td a').all()
    let dat='25'
       await month.selectOption('6')
       await year.selectOption('2017')
      // await page.locator('table.ui-datepicker-calendar a', { hasText: dat }).first().click(); 
        
        for(let r of day){
           let d=await r.innerText()
           if(d===dat){
              await r.click()
              break
           }
        }
       
}

async function selectTravelDate(page:Page,dateInputSelector:string,travelDate:string){
/*
Create a specialized wrapper function for selecting:
•Departure Date
•Return Date
*/
}




test("Dummy Ticket Booking application",async({page})=>{

    //step:1
 await page.goto("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
 await expect(page).toHaveURL("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
 const title=page.getByText('Dummy ticket booking')
 await expect(title).toBeVisible()
const placeOrder=page.getByRole('button',{name:"Place order"})
await expect(placeOrder).toBeVisible()

//step:2
const L1=page.locator('input#product_549')
const L2=page.locator('input#product_550')
const L3=page.locator('input#product_551')
const L4=page.locator('input#product_3186')
const L5=page.locator('input#product_7441')
await expect(L1).toBeVisible()
await expect(L2).toBeVisible()
await expect(L3).toBeVisible()
await expect(L4).toBeVisible()
await expect(L5).toBeVisible()

await L1.check()
await expect(L1).toBeChecked()
await expect(L2).not.toBeChecked()
await expect(L3).not.toBeChecked()
await expect(L4).not.toBeChecked()
await expect(L5).not.toBeChecked()


//Step 3: Enter Passenger Details
const firstName=page.locator('input#travname')
await firstName.fill("Adhithi")
const lastName=page.locator('input#travlastname')
await lastName.fill("Saravanan")
await selectDateOfBirth(page)
const dob=page.locator('#dob')
//await dob.click()
 await expect(dob).toHaveValue('25/07/2017')

const Male=page.getByLabel("Male",{exact:true})
        const Female=page.getByLabel("Female",{exact:true})
        await expect(Male).toBeVisible()
        await expect(Female).toBeVisible()
        await Female.check()
        await expect(Female).toBeChecked()
        await expect(Male).not.toBeChecked()
})