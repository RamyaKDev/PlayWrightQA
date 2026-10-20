import {test,expect} from "@playwright/test"
test("Frame",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
const frameAll=page.frames()
console.log(frameAll.length)

const frame1=page.frameLocator('frame[src="frame_1.html"]')
const ele=frame1.locator('input[name="mytext1"]')
await ele.fill("hello")
await expect(ele).toHaveValue("hello")
})
test("Frame3",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
const frame3=page.frameLocator('frame[src="frame_3.html"]')
const inner=frame3.frameLocator('iframe')
const rad=await inner.getByRole('radio',{name:"I am a human"}).check()
//await expect(rad).toBeVisible()
//await rad.check()
//await expect(rad).toBeChecked()
const ch=await inner.getByRole('checkbox',{name:"Form Autofilling"}).check()


})

test("Frame4",async({page})=>{
    await page.goto('https://sdetqa.vercel.app/autoplay');
   const frame= page.locator('iframe').first().contentFrame()
  const inner= frame.frameLocator('iframe')
 const inne= inner.locator('#innerInput')
 await inne.fill("hello")
 await expect(inne).toHaveValue("hello")
})