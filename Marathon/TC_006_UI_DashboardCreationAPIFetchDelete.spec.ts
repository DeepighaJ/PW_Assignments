
import { test, expect } from '../../fixtures/generateTokenFixture';
import { DashboardPage } from '../../Pages/DashboardPage'
import { SFAppLauncher } from '../../Pages/AppLauncher'
import { da } from '@faker-js/faker'

let sf_Id:any;
const dashboardName = "SalesforcePW Automation Dashboard"
const dashboardDescription = "Salesforce_Dashboard description test"

test.use({storageState:"helper/SFLogin_storageState.json"})

test("Create dashboard by Launching Dashboard page in UI",async({page})=>{

    let dashboard=new DashboardPage(page)

    
       // await dashboard.loadHomePage()
        // await dashboard.welcomePage()
        // // await dashboard.loadHomePage()
        // await dashboard.appLauncher()
        // await dashboard.viewAll()
        // await dashboard.searchApp("Dashboards")

        await page.goto("https://orgfarm-d45a535ff8-dev-ed.develop.lightning.force.com/lightning/o/Dashboard/home?queryScope=mru")
        await dashboard.clickDashboardNewButton()
        await dashboard.createDashboard(dashboardName,dashboardDescription)
        await dashboard.verifyDashboardCreated(dashboardName)
        await dashboard.clickOnSaveandDone()
        await dashboard.verifyDashboardSaved(dashboardName)

})

test("Get API request to fetch details of created dashboard using Get call",async({request,sfAuth})=>{
    const { accessToken, instanceUrl } = sfAuth;
    const getResponse = await request.get(`${instanceUrl}/services/data/v65.0/sobjects/Dashboard`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${accessToken}`
        }        
    })

    expect(getResponse.ok(),`Dashboard fetch failed: ${getResponse.status()} ${getResponse.statusText()}`).toBeTruthy();

    const res = await getResponse.json();
    
    for(let r of res.recentItems){
        if(r.Title === dashboardName){
            console.log("Dashboard found in recent items:", r.Title , r.Id);
            sf_Id = r.Id;
        }
    }

    console.log('[Dashboard Fetch] Salesforce ID :', sf_Id);
    console.log('[Dashboard Fetch] Full response :', res);
})

//Delete Records(Cleanup)
test("Delete the created dashboard using Delete API call",async({request,sfAuth})=>{
    const { accessToken, instanceUrl } = sfAuth;

      // ── Step 1: Delete the Dashboard using the ID ─────────────────────────────
    const deleteResponse = await request.delete(`${instanceUrl}/services/data/v65.0/sobjects/Dashboard/${sf_Id}`,{
        headers:{
            "Authorization":`Bearer ${accessToken}`
        }        
    })

// ── Step 2: Verify successful deletion via status code 204 ────────────────
  expect(deleteResponse.status()).toBe(204);
  console.log('Dashboard deleted successfully. Status:', deleteResponse.status());

})





