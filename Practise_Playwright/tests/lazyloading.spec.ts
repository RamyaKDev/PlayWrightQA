import {test,expect} from "@playwright/test"
test("Scroll by pixel",async({page})=>{
await page.goto("https://www.booksbykilo.in/new-books")
let previous=0
while(true){
 await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight))
 const current=await page.evaluate(()=> document.body.scrollHeight)
 if(previous===current)
    break
 previous=current
}

    console.log("Reached end of the page")
})