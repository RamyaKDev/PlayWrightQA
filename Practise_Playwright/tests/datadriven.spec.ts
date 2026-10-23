import {test, expect} from "@playwright/test"
import fs from 'fs'
//testdata
const searchItems = ['laptop', 'Gift card', 'smartphone'];

for(const item of searchItems){
test(`Read one dime array for ${item}`,async({page})=>{
 await page.goto('https://demowebshop.tricentis.com/');
 await page.locator("#small-searchterms").fill(item)
 await page.locator('input[value="Search"]').click()
 expect.soft(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true})
})
}