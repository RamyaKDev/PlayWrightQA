import {Page,Locator} from "@playwright/test"

export class SignUpPage{
    private readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput:Locator;
    private readonly signUpButton:Locator;
    private readonly signUpLink:Locator;

    constructor(page:Page){
        this.page=page;
         this.signUpLink = this.page.locator('#signin2');
        this.usernameInput = page.getByRole('textbox', { name: 'Username:' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password:' });
        this.signUpButton = page.getByRole('button', { name: 'Sign up' });
    }

    async navigateToSignUp(){
        await this.signUpLink.click()

    }

    async fillUsername(username: string) {
        await this.usernameInput.clear();
        await this.usernameInput.fill(username);
    }

    async fillPassword(password: string) {
        await this.passwordInput.clear();
        await this.passwordInput.fill(password);
    }

    async submitSignUp() {
        await this.signUpButton.click();
    }

    async signUp(username:string,password:string){
    await this.navigateToSignUp()
     await this.fillUsername(username);
        await this.fillPassword(password);

       const dialog=await this.page.waitForEvent('dialog')
         await this.submitSignUp()

        const msg= dialog.message()
        await dialog.accept()
        return msg

    }
}