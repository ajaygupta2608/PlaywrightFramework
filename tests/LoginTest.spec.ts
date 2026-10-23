import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
//import { Dashboard } from '../pages/Dashboard';
import LoginData from '../test data/LoginData.json'
import * as allure from "allure-js-commons";

 

test('Login Scenerio for valid credentials',async({page})=>{

})
for(const data of LoginData)
{
test('Invalid Credentials', async({page})=>{

    await allure.step('open login page', async()=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })

const loginP1 = new LoginPage(page);
await loginP1 .LoginUi(data.username, data.password)
if(data.Scenario=="Invalid Credentials")
{
    await loginP1.InvalidCredentials()
}
else if(data.Scenario=="empty data")
{
    await loginP1.RequiredField()
}

  
})
}
