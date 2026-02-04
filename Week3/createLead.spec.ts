import test from '@playwright/test'

test("Create Lead",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")

    await page.locator("input[value='Login']").click()

    await page.waitForTimeout(3000)

    await page.locator("//a[contains(text(),'CRM/SFA')]").click()

    await page.waitForTimeout(3000)

    await page.locator("//a[text()='Leads']").click()

    await page.locator("//a[text()='Create Lead']").click()

    await page.locator("#createLeadForm_companyName").fill("Test Leaf")

    await page.locator("#createLeadForm_firstName").fill("Deepigha")

    await page.locator("#createLeadForm_lastName").fill("Japamony")

    await page.locator("#createLeadForm_personalTitle").fill("Mrs.")

    await page.locator("#createLeadForm_generalProfTitle").fill("Automation")

   
    await page.locator("#createLeadForm_annualRevenue").fill("1400000")
   
    await page.locator("#createLeadForm_departmentName").fill("Banking")

    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9378810000")

    await page.locator(".smallSubmit").click()



    










})  