import {Page, Locator} from "@playwright/test"

export class LoginPage
{
    //variable declare
    readonly page : Page
    readonly usernameInput : Locator
    readonly passwordInput : Locator
    readonly Loginbtn : Locator
    constructor (page:Page)
    {
        this.page = page;
        this.usernameInput = page.locator('input[name="username"]')
        this.passwordInput = page.locator('input[name = "password"]')
        this.Loginbtn = page.locator('button[type = "submit"]')
    }
    //method
    async LoginUi()
    {
        await this.usernameInput.fill("Admin")
        await this.passwordInput.fill("admin123")
        await this.Loginbtn.click()
    }
    

}