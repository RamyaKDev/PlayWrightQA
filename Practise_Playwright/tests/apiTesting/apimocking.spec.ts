import {test,expect} from "@playwright/test"

test("mocking",async({page})=>{
    await page.route("**/api/v1/fruits",async(route)=>{

        const products=[
           {name:"samsung",id:1},
            {name:"dell",id:2},
        ] 

        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(products)
        })

    })

    await page.goto('https://demo.playwright.dev/api-mocking')
    await expect(page.getByText('samsung')).toBeVisible();
 // await expect(page.getByText('ABC')).toBeVisible();

  
})


test("modifying",async({page})=>{
    await page.route("**/api/v1/fruits",async(route)=>{

    const response=await route.fetch()
    let jsonBody=await response.json()
    console.log(jsonBody)
    jsonBody.push( {name:"samsung",id:1},
            {name:"dell",id:2})

        route.fulfill({
            response,
            json:jsonBody
        })

     })

    await page.goto('https://demo.playwright.dev/api-mocking')
     await expect(page.getByText('samsung')).toBeVisible();
 // await expect(page.getByText('ABC')).toBeVisible();

  
})