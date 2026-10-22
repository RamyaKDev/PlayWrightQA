import {test,chromium, expect} from "@playwright/test"
import fs from 'fs'
const url="https://sdetqa.vercel.app/login_app"
const cookieFile="./tests/storage-data/cookie.json"

test.describe.configure({mode:"serial"})

test("cookies",async({})=>{
const browser=await chromium.launch()
const context=await browser.newContext()
const page=await context.newPage()
await page.goto(url)

const username=await page.getByLabel("Username").fill("admin")
const password=await page.getByLabel("Password").fill("admin123") 
const cookieLabel=await page.getByLabel(" 🍪 Cookie").check()
const button=await page.getByRole("button",{name:"Login"}).click()

await expect(page).toHaveURL("https://sdetqa.vercel.app/login_app")
const textD=page.getByText("Dashboard Welcome",{exact:true})
await expect(textD).toBeVisible()

const cookie=await context.cookies()
fs.writeFileSync(cookieFile,JSON.stringify(cookie))
console.log("cookies added succefully")
//page.waitForTimeout(2000)

                    

})
    

test("cookies launching",async({})=>{
const browser=await chromium.launch()
const context=await browser.newContext()

const cookieesaved=JSON.parse(fs.readFileSync(cookieFile,"utf-8"))
await context.addCookies(cookieesaved)
const page=await context.newPage()

await page.goto(url)
await expect(page).toHaveURL("https://sdetqa.vercel.app/login_app")
const textD=page.getByText("Dashboard Welcome",{exact:true})
await expect(textD).toBeVisible()
})