import {test,expect} from "@playwright/test"
test.describe("Ecommerce",()=>{
    test.beforeEach(async({page})=>{
        await page.goto("https://www.bstackdemo.com/")
        
    })
    test("URL validation",async({page})=>{
        //1. Navigate to the Webpage
        await  expect(page).toHaveURL("https://www.bstackdemo.com/")
        const logo= page.getByAltText('logo')
        expect(logo).toBeVisible()
    })
    //2. Interact with the "Order by" Dropdown
     test("2. Interact with the Order by Dropdown",async({page})=>{
        
        const orderby= page.locator('select')
        await expect(orderby).toBeVisible()
        await expect(orderby).toBeEnabled()
       const lth= await orderby.selectOption("Lowest to highest")
       await expect(orderby).toHaveValue("lowestprice")
     
       //3. Retrieve and Print Product Information
     
        
        //Capture all product name elements
    //     const products=page.getByText("Products").first()
    //    await expect(products).toBeVisible()
      const productss= page.locator("p.shelf-item__title")
     
      const productitemc=await productss.count()
      console.log("productitemcount",productitemc)
       const proname= await productss.allTextContents()
    //    for(const name of proname){
    //     console.log(name)
    //    }

       //Capture all product price elements
      const productsp=  page.locator('div.val')
      const productc=await productsp.count()
      console.log("productpricecount",productc)
       const propname= await productsp.allTextContents()
    //    for(const name of propname){
    //     console.log(name)
    //    }
       //verify product count with price count
       expect(productitemc).toEqual(productc)


       //corresponding product name and price
        for(let i=0;i<proname.length;i++){
            console.log(`${proname[i]} : ${propname[i]}`)
        }

        //4. Identify and Print the Lowest Priced Product
         console.log(`First lowest product is ${proname.at(0)} : ${propname.at(0)}`)
          console.log(`First lowest product is ${proname[proname.length-1]} : ${propname[propname.length-1]}`)
    })
    })
