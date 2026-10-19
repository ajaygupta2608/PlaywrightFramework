# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.ts >> Login Scenerio
- Location: tests\LoginPage.spec.ts:11:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/", waiting until "load"

```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | import { LoginPage } from '../pages/LoginPage';
  4  | 
  5  | //import { Dashboard } from '../pages/Dashboard';
  6  | 
  7  | import * as allure from "allure-js-commons";
  8  | 
  9  |  
  10 | 
  11 | test('Login Scenerio',async({page})=>{
  12 | 
  13 |   
  14 | 
  15 |    await allure.epic("User Managnment")
  16 | 
  17 |    await allure.feature("Login")
  18 | 
  19 |    await allure.story("Valid user login")
  20 | 
  21 |    await allure.severity("criticle")
  22 | 
  23 |    await allure.step('open login page',async()=>{
  24 | 
> 25 |        await page.goto('/')
     |                   ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  26 | 
  27 |    })
  28 | 
  29 |    
  30 | 
  31 |    const loginP = new LoginPage(page);
  32 | 
  33 |    //await loginP.LoginUi(process.env.UserName,process.env.Password)
  34 | 
  35 |   // const Dashboard1 = new Dashboard(page)
  36 | 
  37 |    //Dashboard1.clickSidePanel("Admin")
  38 | 
  39 |    page.pause()
  40 | 
  41 | })
```