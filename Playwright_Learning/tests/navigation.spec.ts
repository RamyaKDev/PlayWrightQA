import {test,expect} from "@playwright/test"
test("Navigation ",async({page})=>{
await page.goto("https://sdetqa.vercel.app/autoplay")
const homelink= page.getByRole("link",{name:" Home"})
await homelink.click()
await expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay#home")
const dataform=page.getByRole('heading', { name: 'Data Entry Form' })
await expect(dataform).toBeVisible()
await expect(dataform).toHaveText("Data Entry Form")



})