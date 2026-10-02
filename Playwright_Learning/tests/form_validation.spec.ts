import {test,expect} from "@playwright/test"
test.describe("Form Validation",()=>{

    test.beforeEach(async({page})=>{
       await page.goto("https://sdetqa.vercel.app/autoplay")
    })

    //1. Page Load Validation
    test("1. Page Load Validation",async({page})=>{
     await expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay")
    const logo= page.getByText("AutoPlay")
    await expect(logo).toBeVisible()
    await expect(logo).toHaveText("AutoPlay")
    })

    //2.Input Field Validation
      test("2.Input Field Validation",async({page})=>{
        //Name field validation
        const name=page.getByLabel("name")
        await expect(name).toBeVisible()
        await name.fill("John Smith")
        await expect(name).toBeEnabled()
        await expect(name).toHaveValue("John Smith")

       await  expect(name).toHaveAttribute("maxlength","15")

       //email
        const email=page.getByLabel("email")
        await expect(email).toBeVisible()
        await email.fill("abc123@xyz.com")
        await expect(email).toHaveValue("abc123@xyz.com")

        //phone number
        
        const phone=page.getByLabel("phone")
        await expect(phone).toBeVisible()
        await phone.fill("1234567890")
        await expect(phone).toHaveValue("1234567890")

        //Address
        
         const address=page.getByLabel("address")
        await expect(address).toBeVisible()
        await address.fill("123 Xyz Lane\nDelhi,\nIndia")
        await expect(address).toHaveValue("123 Xyz Lane\nDelhi,\nIndia")

          })
          //3. Radio Button (Gender) Validation
         test("3.Radio Button (Gender) Validation",async({page})=>{
        
        const Male=page.getByLabel("Male",{exact:true})
        const Female=page.getByLabel("Female",{exact:true})
        await expect(Male).toBeVisible()
        await expect(Female).toBeVisible()
        await Female.check()
        await expect(Female).toBeChecked()
        await expect(Male).not.toBeChecked()
         })

         //4. Checkbox (Days) Validation
          test("4. Checkbox (Days) Validation",async({page})=>{
        
    //   const sunday=  page.getByLabel("sun")
    //   await expect(sunday).toBeVisible()
    //   await sunday.check()
    //   await expect(sunday).toBeChecked()

      const LCheck=['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
        // for(const i of LCheck){
        //    const day= page.getByLabel(i)
        //    await day.check()
        //    await expect(day).toBeChecked()
        // }

        // const unch=['Fri','Sat','Sun']
        //  for(const i of unch){
        //    const day= page.getByLabel(i)
        //    if(await day.isChecked())
        //    await day.uncheck()
        //    await expect(day).not.toBeChecked()
        // }
        // // Toggle all checkboxes
        //   for(const i of LCheck){
        //     const day= page.getByLabel(i)
        //    if(await day.isChecked())
        //    {
        //    await day.uncheck()
        //    await expect(day).not.toBeChecked()
        //   }
        //   else{
        //    await day.check()
        //    await expect(day).toBeChecked()
        //   }
        // }
        //Select checkboxes using index (1,3,6 → Tue, Thu, Sun)
       const indexes =[1,3,6]
        for(const i of indexes){
            const day=LCheck[i]
          const d=  page.getByLabel(day)
          await d.check()
          await expect(d).toBeChecked()

    }
    })
    //5. Submit Button Validation
    test("5. Submit Button Validation",async({page})=>{
    const button1=page.getByRole("button",{name:"Submit"}).first()
    await expect(button1).toBeVisible()
    await button1.click()
    await expect(button1).toBeEnabled()
    })

    //6.Additional (Recommended) Test Cases
     test("6.Additional (Recommended) Test Cases",async({page})=>{
        const forme= page.locator('#formErrors')
        const button1=page.getByRole("button",{name:"Submit"}).first()
        const address=page.getByLabel("address")
        const phone=page.getByLabel("phone")
        const name=page.getByLabel("name")

        await address.fill(" ")
        await phone.fill(" ")
        await name.fill(" ")
        await button1.click()

        await expect(forme).toBeVisible();
        await expect(forme).toContainText("Please fix the following:")

        //Enter invalid email format
         const email=page.getByLabel("email")
        await expect(email).toBeVisible()
        await email.fill("abc123.com")
         await button1.click()
         await expect(forme).toContainText("Please fix the following:")
         await expect(forme).toContainText("Please enter a valid email address.")

        // Enter more than 15 chars in name
         await name.fill("123456789123456789 ")
         await expect(name).toHaveValue("123456789123456")

         //Enter alphabets in phone field
           await phone.fill("abc123fdh232334 ")
            await expect(forme).toContainText("Please fix the following:")
         await expect(forme).toContainText("Phone is required.")
     })
})

