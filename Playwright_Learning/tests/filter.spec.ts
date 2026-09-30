import {test,expect} from "@playwright/test"
test.beforeEach("Locator Filter",async({page})=>{
    await page.goto('https://sdetqa.vercel.app/filters_practice.html')
})
test.afterEach("Locator Filter",async({page})=>{
    await page.close()
})
//1.Verify "Add to cart" for Product 2
test("Verify Add to cart for Product 2",async({page})=>{
    const product=page.getByRole("listitem")
    .filter({hasText:"Product 2"})
    .getByRole("button",{name:"Add to cart"})
  await  expect(product).toBeVisible()

})

//2.Count items not having "Out ofstock"
test("Count items not having Out of stock",async({page})=>{
   const outstock= page.locator('.card').nth(1)
                    .getByRole("listitem")
                    .filter({hasNotText:'Out of stock'})
    await expect(outstock).toHaveCount(3)
    })

    //3.Find items with "In stock"
    test("Count items having in stock",async({page})=>{
   const instock= page.locator('.card').nth(1)
                    .getByRole("listitem")
                    .filter({hasText:'In stock'})
    await expect(instock).toHaveCount(3)
    })

    //4.Find items with "Out of stock"
    test("Find items with Out of stock",async({page})=>{
        const out=page.getByRole("listitem")
        .filter({hasText:"Out of stock"})
        await expect(out).toHaveCount(2)
    })

    //5.Verify elements using data-testid
     test("Verify elements using data-testid",async({page})=>{

       const apple= page.getByTestId("apple")
       await expect(apple).toBeVisible()
       await expect(apple).toContainText("apple")

     })

     //6.Count all elements with test ids
      test("count all elements using data-testid",async({page})=>{
        const elem=page.locator('[data-testid]')
        await expect(elem).toHaveCount(5)
      
      })
      //7.Find "Say goodbye" button for John
            test("Find Say goodbye button for John",async({page})=>{
              const goodbye=  page.getByRole("listitem")
                .filter({hasText:"John"})
                .getByRole("button",{name:"Say goodbye"})

                await expect(goodbye).toBeVisible()
                await expect(goodbye).toHaveText("Say goodbye")
            })

    //9.Count "Say hello" buttons for John
     test("Count Say hello buttons for John",async({page})=>{
         const goodbye=  page.getByRole("listitem")
                .filter({hasText:"John"})
                .getByRole("button",{name:"Say hello"})

                await expect(goodbye).toHaveCount(1)

     })
//11.Count all buttons for John
 test("Count all buttons for John",async({page})=>{
         const goodbye=  page.getByRole("listitem")
                .filter({hasText:"John"})
               

                await expect(goodbye).toHaveCount(2)

     })

     //12.Find "Subscribe" buttons usingmultiple conditions
      test("Find Subscribe buttons using multiple conditions",async({page})=>{
       const sub= page.getByRole("button")
        .and(page.getByTitle("Subscribe",{exact:true}))
        await expect(sub.first()).toBeVisible()
        await expect(sub.last()).toBeVisible()
        await expect(sub).toHaveCount(2)

      })

      //13.Find "Unsubscribe" button
      test("Find Unsubscribe button",async({page})=>{
       const unsub= page.getByRole("button")
        .and(page.getByTitle("Unsubscribe",{exact:true}))
        await expect(unsub).toBeVisible()
        
        await expect(unsub).toHaveCount(1)

      })

      //16.Count tasks with "done" status
      test("Count tasks with done status",async({page})=>{
       const co= page.getByRole("listitem")
        .filter({hasText:"done"})
        await expect(co).toHaveCount(2)

      })

      //18.Verify Product 2 button
      test("Verify Product 2 button",async({page})=>{
       const b= page.getByRole("listitem")
        .filter({hasText:"Product 2"})
        .getByRole("button",{name:"Add to cart"})
         await expect(b).toBeVisible()
         await expect(b).toHaveText("Add to cart")

      })