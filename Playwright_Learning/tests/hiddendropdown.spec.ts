import {test,expect} from "@playwright/test"
test(" Hidden DropDown ",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const heading=page.getByRole("heading",{name:"Login"})
    await expect(heading).toBeVisible()

    const username= page.getByPlaceholder("Username")
    await username.fill("Admin")
    const pwd=page.getByPlaceholder("Password")
    await pwd.fill("admin123")

    const login=page.getByRole("button",{name:"Login"} )
    await expect(login).toBeVisible()
    await expect(login).toBeEnabled()
    await login.click()

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    const dashboard=page.getByText("Dashboard").first()
    await expect(dashboard).toBeVisible()

    const pim=page.getByText("PIM").first()
    await expect(pim).toBeVisible()
    await pim.click()

    const jobtitle=page.locator('i.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').nth(2)
   await expect(jobtitle).toBeVisible()
   await expect(jobtitle).toBeEnabled()
   await jobtitle.click()

   const options=page.locator("div[role='listbox'] span")
   await expect(options.first()).toBeVisible()
   const optionc=await options.count()
   console.log(optionc)

   const optiontext=await options.allInnerTexts()
   console.log(optiontext)

    for(let i=0;i<optionc;i++){
    const option= options.nth(i)
     const optionText=await option.textContent()
    console.log(optionText)

    if(optionText==='Automaton Tester'){
            option.click()
            break
    }
  }
  //verification selected value in teh dropdown
  await expect(page.locator('.oxd-select-text-input').nth(2)).toHaveText("Automaton Tester")

})