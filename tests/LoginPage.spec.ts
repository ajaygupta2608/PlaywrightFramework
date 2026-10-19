import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

//import { Dashboard } from '../pages/Dashboard';

import * as allure from "allure-js-commons";

 

test('Login Scenerio',async({page})=>{

  

   await allure.epic("User Managnment")

   await allure.feature("Login")

   await allure.story("Valid user login")

   await allure.severity("criticle")

   await allure.step('open login page',async()=>{

       await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

   })

   const loginP = new LoginPage(page);

   //await loginP.LoginUi(process.env.UserName,process.env.Password)

  // const Dashboard1 = new Dashboard(page)

   //Dashboard1.clickSidePanel("Admin")

   page.pause()

})