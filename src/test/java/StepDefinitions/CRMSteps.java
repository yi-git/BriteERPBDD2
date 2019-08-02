package StepDefinitions;

import base.Base;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.Keys;
import org.testng.Assert;
import pages.CRMPage;

public class CRMSteps extends Base {

    @Given("^on CRM page$")
    public void on_CRM_page() throws Throwable {
        //does nothing
    }



    CRMPage crm = new CRMPage(driver);
    int itemsPresent =crm.items.size();
    @Given("^on CRM page \"([^\"]*)\" time$")
    public void on_CRM_page(String arg) throws Throwable {
        System.out.println("There are " + crm.items.size()+ " items");
    }

    @When("^user click on Create button on CRM$")
    public void user_click_on_Create_button_on_CRM() throws Throwable {
        crm.create.click();
    }

    @When("^Enters details of Opportunity$")
    public void enters_details_of_Oppotunity() throws Throwable {
        crm.opportunityTitle.sendKeys("Galaxy Phone");
        crm.customer.sendKeys("Michael" );
        Thread.sleep(500);
        crm.customer.sendKeys(Keys.ENTER);
        crm.expectedRevenue.clear();
        crm.expectedRevenue.sendKeys("799.99");
    }

    @When("^Saves$")
    public void saves() throws Throwable {
        crm.createOpportunity.click();
    }

    @Then("^New opportunity should be created$")
    public void new_opportunity_should_be_create() throws Throwable {
        Thread.sleep(2000);
        int finalNumber = crm.items.size();
        Assert.assertEquals(finalNumber,itemsPresent+1);
    }



    @When("^user click on Galaxy Phone$")
    public void user_click_on_Galaxy_Phone() throws Throwable {
     for(int i=0; i<crm.items.size(); i++){
         if(crm.items.get(i).getText().equalsIgnoreCase("Galaxy Phone")) {
             crm.items.get(i).click();
             break;
         }
     }
        Thread.sleep(2000);
    }

    @When("^deletes the item$")
    public void deletes_the_item() throws Throwable {
       crm.action.click();
       crm.delete.click();
       crm.deleteOK.click();
       Thread.sleep(1000);
    }

    @Then("^item should be deleted$")
    public void item_should_be_deleted() throws Throwable {
        crm.getTMCRM().click();
       Thread.sleep(3000);
    }


    @When("^user click on List view$")
    public void user_click_on_List_view() throws Throwable {
       crm.list.click();
    }

    @When("^user check Galaxy Phone checkbox$")
    public void user_check_Galaxy_Phone_checkbox() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        for (int i = 0; i < crm.listedItems.size(); i++) {
            if (crm.listedItems.get(i).getText().equalsIgnoreCase("Galaxy Phone")) {
                crm.listCheckboxes.get(i).click();
                break;
            }

        }

    }
}
