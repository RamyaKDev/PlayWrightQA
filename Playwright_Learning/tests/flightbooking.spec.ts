import {test,expect} from "@playwright/test"
test(" Flight Booking",async({page})=>{
    await page.goto("https://blazedemo.com/")
    await expect(page.getByText("Welcome to the Simple Travel Agency!")).toBeVisible()

   const select1= page.locator('select[name="fromPort"]')
   await expect(select1).toBeVisible()
   await expect(select1).toBeEnabled()
   await select1.selectOption("Boston")


   const select2= page.locator('select[name="toPort"]')
    await expect(select2).toBeVisible()
   await expect(select2).toBeEnabled()
   await select2.selectOption("London")

    //const button=page.locator('input[value="Find Flights"]')
    const button=page.getByRole('button')
    await page.waitForTimeout(2000)
    await button.click()
    await expect(page).toHaveURL("https://blazedemo.com/reserve.php")
    const flightTitle=page.getByText('Flights from Boston to London:')
    await expect(flightTitle).toBeVisible()

    //Count number of flight rows
   const table= page.locator('table.table')
  const trows= table.locator('tbody tr')
  const rowCount=await trows.count()
  console.log(rowCount)
  await expect(trows).toHaveCount(rowCount)
   expect(rowCount).toBeGreaterThan(0)

   let flightPrices=[] 
   //Capture all flight prices from the table
   const rows=await trows.all()
  for(const row of rows){
   const price= await row.locator('td').nth(5).innerText()
   //console.log(price)
   flightPrices.push(price)
  }
  console.log(flightPrices)

  //Identify the lowest price among all flights
  let min=flightPrices[0]

  for(let i=0;i<flightPrices.length;i++){
    if(flightPrices[i]<min)
        min=flightPrices[i]
        
  }
  console.log("Lowest fare",min)

 //Click on Choose This Flight for the lowest price row
     for(const row of rows){
        const price= await row.locator('td').nth(5).innerText()
        if(price===min){
         const clickButton= row.nth(0).locator('td',{hasText:"Choose This Flight"})
         await page.waitForTimeout(2000)
        await clickButton.click()
        
        break
         
        }
  }
const passengerForm=page.getByRole('heading',{name:'Your flight from TLV to SFO has been reserved.'})
await expect(page).toHaveURL("https://blazedemo.com/purchase.php")
await expect(passengerForm).toBeVisible()

  let name=page.getByPlaceholder('First Last')
  await name.fill("John")
  let address=page.getByLabel('Address')
  await address.fill("1403 American Beauty Ln")
  let city= page.getByLabel('City')
  await city.fill("Columbus")
  let state=page.getByLabel('State')
  await state.fill("OH")
  let zipCode=page.getByLabel('Zip Code')
  await zipCode.fill("43240")
let card=page.locator('select[name="cardType"]')
await card.selectOption("American Express")
await page.waitForTimeout(2000)
let credit=page.getByLabel('Credit Card Number')
await credit.fill("6789067345231267")
let month= page.getByLabel('Month')
await month.fill("10")
let year= page.getByLabel('Year')
await year.fill("2024")
let cardName= page.getByLabel('Name on Card')
await cardName.fill("John Canedy")

await page.waitForTimeout(2000)

const purchaseFlight=page.locator('input[value="Purchase Flight"]')
await expect(purchaseFlight).toBeVisible()
await page.waitForTimeout(2000)
await purchaseFlight.click()

const conf=page.getByText("Thank you for your purchase today!")
await expect(conf).toBeVisible()
})