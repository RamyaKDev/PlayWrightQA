import {test,expect} from "@playwright/test"
test.describe("Drop Down",()=>{
test.beforeEach(async({page})=>{
await page.goto("https://sdetqa.vercel.app/autoplay")
const autotext=page.getByText("AutoPlay")
await expect(autotext).toBeVisible()
})

//1. Test Cases – Single Select Dropdown (Country)
test(" 1. Test Cases – Single Select Dropdown (Country)",async({page})=>{
await expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay")

//Locate Country dropdown
const countrydrop=page.locator('#country')
await expect(countrydrop).toBeVisible()

//Get default selected value
await expect(countrydrop).toHaveValue("india")

//Select option using label "USA"

await countrydrop.selectOption({label:'USA'})
await expect(countrydrop).toHaveValue("usa")

//Select option using value "uk"
await countrydrop.selectOption({value:'uk'})
await expect(countrydrop).toHaveValue("uk")

//Select option using index (3)
await countrydrop.selectOption({index:3})
await expect(countrydrop).toHaveValue("germany")

//Select option using value + label (France)
await countrydrop.selectOption({label:'France',value:'france'})
await expect(countrydrop).toHaveValue("france")

//Count total dropdown options
const countryoption=page.locator('#country option')
await expect(countryoption).toHaveCount(5)

//Get all option texts - List should contain "Germany"
const countryoptions=await countryoption.allTextContents()
expect(countryoptions).toContain('Germany')

//Print dropdown options
for(const option of countryoptions){
    console.log(option)
}

})

//2. Test Cases – Multi Select Dropdown (Colors)
test("2. Test Cases – Multi Select Dropdown (Colors)",async({page})=>{
    const color=page.locator('#colors')
    await expect(color).toBeVisible()
     
    //Get default selected value
    expect(color).toHaveValue("blue")

    //Red, Green, Yellow
    await color.selectOption([{label:'Red'},{label:'Green'},{label:'Yellow'}])
    expect(color).toHaveValues(['red','green','yellow'])

    await color.selectOption([{value:'red'},{value:'green'},{value:'yellow'}])
    expect(color).toHaveValues(['red','green','yellow'])

     await color.selectOption([{index:0},{index:2},{index:3}])
    expect(color).toHaveValues(['red','green','yellow'])
})
//3. Test Cases – Sorted Dropdown Validation
test(" 3. Test Cases – Sorted Dropdown Validation",async({page})=>{
const sortcolor=page.locator('#sorted')
await expect(sortcolor).toBeVisible()

const sortoptions=sortcolor.locator('option')
const options=await sortoptions.allTextContents()
for(const o of options){
console.log(o)
}
const newoptions=[...options]
const sortednew=newoptions.sort()
 expect(sortednew).toEqual(options)
})
})