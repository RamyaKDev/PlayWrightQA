import { test , expect } from "@playwright/test"
test("Title",async({page})=>{
await page.goto("https://sdetqa.vercel.app/pw-locators-practice-app.html")

//getbyRole()
const primarybutton=page.getByRole("button",{name:"Primary Action"})
await expect(primarybutton).toBeVisible()
await primarybutton.click()

const homelink=page.getByRole("link",{name:"Home"})
//await expect(homelink).toBeVisible()
await homelink.first().click()

const check=page.getByRole("checkbox",{name:"Accept terms"})
await expect(check).toBeEditable()
await check.click()



//getByText()
const textValue=page.getByText("Locate elements by their text content.",{exact:true})
await expect(textValue).toBeVisible()


//getByLabel()
const emailLabel=page.getByLabel("email")
await expect(emailLabel).toBeEditable()
await emailLabel.fill("abc@gmail.com")


const standardLabel=page.getByLabel("Standard")
await expect(standardLabel).toBeVisible()
await standardLabel.check()


//getByPlaceHolder()
const place=page.getByPlaceholder("Enter your full name")
await expect(place).toBeEditable()
await place.fill("Ramya")

//getByAltText()
const alttext=page.getByAltText("logo image")
await expect(alttext).toBeVisible()

//getbyTitle

const Text=page.getByTitle("Tooltip text")
await expect(Text).toHaveText("This text has a tooltip")

//getbyTestId()
const profile=page.getByTestId("profile-email")
await expect(profile).toBeVisible()
})

