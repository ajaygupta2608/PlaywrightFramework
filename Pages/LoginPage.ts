import {Page, Locator,expect} from "@playwright/test"
import * as allure from "allure-js-commons";

export class LoginPage
{
    //variable declare
    readonly page : Page
    readonly usernameInput : Locator
    readonly passwordInput : Locator
    readonly Loginbtn : Locator
    readonly LoginCredError : Locator
    readonly userRequiredError : Locator
    readonly passRequiredError : Locator
    constructor (page:Page)
    {
        this.page = page;
        this.usernameInput = page.locator('//input[@name="username"]')
        this.passwordInput = page.locator('//input[@name = "password"]')
        this.Loginbtn = page.locator('button[type = "submit"]')
        this.LoginCredError = page.locator('. oxd-alert-content-error')
        // this.userRequiredError = page.locator('input[name="username"]')
        // .locator('xpath=../..')
        // .locator('. oxd-input-group__message')
        this.userRequiredError = page.locator('//input[@name="username"]/../following-sibling::span')
         this.passRequiredError = page.locator('//input[@name="password"]/../following-sibling::span')
      
    }
    //method
    async LoginUi(username : any, password : any):Promise<void>
    {
        await allure.step('Enter username',async()=>{
            await this.usernameInput.fill(username)

        })
        await this.passwordInput.fill(password)
        await this.Loginbtn.click()
        
    }
    async InvalidCredentials()
    {

        await expect(this.LoginCredError).toContainText("Invalid credentials")

    }
    async RequiredField():Promise<void>
    {
        await expect(this.userRequiredError).toBeTruthy
        await expect (this.passRequiredError).toBeTruthy 

    }


}