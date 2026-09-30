import {test,expect} from "@playwright/test"
test("Login",async({page})=>{
    //await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
   const logo= page.getByAltText("company-branding")
   await expect(logo).toBeVisible()

   const user=page.getByPlaceholder("Username")
   await expect(user).toBeEditable()
   await user.fill("Admin")

    const pwd=page.getByPlaceholder("Password")
   await expect(pwd).toBeEditable()
   await user.fill("admin123")


   const loginButton=page.getByRole("button",{name:" Login "})
    await expect(loginButton).toBeVisible()
    await loginButton.click()


})