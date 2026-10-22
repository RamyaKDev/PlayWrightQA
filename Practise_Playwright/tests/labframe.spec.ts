import {test,expect} from "@playwright/test"
test("Frame",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    
})