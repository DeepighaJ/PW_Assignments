
import { expect } from '@playwright/test'

import { fr } from "@faker-js/faker";
import {SFAppLauncher} from "./AppLauncher"

export class DashboardPage extends SFAppLauncher{

    
   
    async clickDashboardNewButton(){

        await this.page.locator("//div[@title='New Dashboard']").click()

       // await this.page.waitForSelector("//h1[text()='New Dashboard']", { state: 'visible' })

    }
    async createDashboard(dashboardName:string, description:string){
       
        let frame = this.page.frameLocator("iframe[title='dashboard']")

        await frame.getByRole('textbox', { name: 'Name' }).fill(dashboardName)

        await frame.getByRole("textbox", { name: "Description" }).fill(description)

        await frame.getByRole('button', { name: 'Create' }).click()
    }

    async verifyDashboardCreated(dashboardName:string){

        let frame = this.page.frameLocator("iframe[title='dashboard']")

        const dashboardHeader = frame.locator(`//lightning-formatted-text[text()='${dashboardName}']`)
    }

    async clickOnSaveandDone(){
       
        let frame = this.page.frameLocator("iframe[title='dashboard']")

        await frame.getByRole('button', { name: 'Save' }).click()

       // await expect(frame.getByText('Dashboard saved')).toBeVisible({timeout:2000})
       // await frame.locator('div').filter({ hasText: 'Success notification.' }).nth(3).click();

        await frame.getByRole('button', { name: 'Done' }).click()

        
    }

    async verifyDashboardSaved(dashboardName:string){
        await this.page.waitForTimeout(2000)

        let frame = this.page.frameLocator("iframe[title='dashboard']")

        await expect(frame.getByRole('heading')).toContainText(dashboardName);
       
       // const dashboardSavedText = await frame.locator("//span[text()='Dashboard']/following-sibling::span").textContent()
       // await expect(dashboardSavedText).toBe(dashboardName)

    }

}

