import {test,expect} from "@playwright/test"
test("Navigation ",async({page})=>{
await page.goto("https://sdetqa.vercel.app/autoplay")
const homelink= page.getByRole("link",{name:" Home"})
await homelink.click()
await expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay#home")
const dataform=page.getByRole('heading', { name: 'Data Entry Form' })
await expect(dataform).toBeVisible()
await expect(dataform).toHaveText("Data Entry Form")


const a=[1,4,2,3]
let flag=false
for(let i=0;i<a.length;i++){
let s=41;
if(a[i]===s){
 flag=true
 break   
}
else
    flag=false
}
if(flag)
    console.log("element found")
else
    console.log("element not found")
})