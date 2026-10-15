import {test,expect} from "@playwright/test"
test("Toggle",async({page})=>{
   await page.goto("https://sdetqa.vercel.app/autoplay")
    const button=page.locator('button#toggleBtn')
    const start=await button.textContent()
    await button.click()
     const stop=await button.textContent()
    expect(start).not.toEqual(stop)

})


test("Right Click/Context click",async({page})=>{
   await page.goto("https://sdetqa.vercel.app/autoplay")
    const button1=page.locator('button#rightClickBtn')
    await button1.click({button:'right'})
   const rightbutton=page.locator('div#customContextMenu button')
   const right=await rightbutton.allInnerTexts()
   console.log(right)
   expect(right).toEqual([ 'Edit', 'Cut', 'Copy', 'Paste', 'Delete', 'Quit' ])
   const editButton=page.locator('button',{hasText:'Edit'})
   page.once('dialog',(dialog)=>{
    expect(dialog.message()).toContain("Selected: Edit")
    dialog.accept()
   })
   await editButton.click()
   
   })

test("Hover me",async({page})=>{
   await page.goto("https://sdetqa.vercel.app/autoplay")
   //const hover1=page.locator('span:has-text("Hover me")')
   const hover1=page.getByText("Hover me").first()
   await expect(hover1).toBeVisible()
   await hover1.hover()
   console.log(await hover1.getAttribute('title'))
  expect(await hover1.getAttribute('title')).toContain("This is a tooltip")
})

test("Double Click",async({page})=>{
   await page.goto("https://sdetqa.vercel.app/autoplay")
    const dclick=page.getByRole('button',{name:'Double click'})
    await expect(dclick).toBeVisible()
    page.once('dialog',(dialog)=>{
        expect(dialog.message()).toContain("Double clicked!")
        dialog.accept()
   })
    await dclick.dblclick()
})

test("Copy Text",async({page})=>{
   await page.goto("https://sdetqa.vercel.app/autoplay")
 const field1=page.locator('input#field1')
 const field2=page.locator('input#field2')
 const copyButton=page.locator('button',{hasText:'Copy Text'})
 await field1.fill("welcome")
 await copyButton.dblclick()
 await expect(field2).toHaveValue("welcome")
   })


   test("Drag",async({page})=>{
   await page.goto("https://sdetqa.vercel.app/autoplay")
   const field1=page.getByText("Drag me")
    const field2=page.getByText("Drop zone")

    page.once('dialog',(dialog)=>{
        expect(dialog.message()).toContain("Dropped!")
        dialog.accept()
   })
    await field1.dragTo(field2)

    })



test("Slider",async({page})=>{
   await page.goto("https://sdetqa.vercel.app/autoplay")
    const range=page.locator('#priceSlider')    
    await expect(range).toBeVisible()
    range.focus()
    await page.keyboard.press("Home") 
    for(let i=0;i<50;i++){
        await page.keyboard.press("ArrowRight") 
    }
    //await page.keyboard.press("End") 
   const slideval=await page.locator('#sliderVal').textContent()
   expect(slideval).toBe(50)
    })


    test(" 2 side Slider",async({page})=>{
   await page.goto("https://sdetqa.vercel.app/autoplay")

const rangeBar=page.locator('#slider-range')  
await rangeBar.focus()

const amount=page.locator('#amount')

const bar1=page.locator('#slider-range span').first() 
await page.keyboard.press("Home")

await bar1.focus()



for(let i=0;i<100;i++){
    const value=await amount.inputValue()
const minvalue=value?.split('-')[0]

    if(minvalue==="100"){
        break
    }
     await bar1.press("ArrowRight") 

}

const bar2=page.locator('#slider-range span').last()
await page.keyboard.press("End") 


await bar2.focus()
for(let i=0;i<100;i++){
    const value=await amount.inputValue()
const maxvalue=value?.split('-')[1]

    if(maxvalue==="400"){
        break
    }
     await bar2.press("ArrowLeft") 
}

    })