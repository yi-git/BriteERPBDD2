package StepDefinitions;

// Project Name: BriteERPBDD2
// Date: 8/9/2019
//Created by: Berdy Hojayev

import base.Base;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pages.CRMPage;
import pages.LoginPage;

import java.util.concurrent.TimeUnit;

public class TopMenuLinksSteps  extends Base {
    //WebDriver driver;

    LoginPage lp;

    @Given("^user on main page$")
    public void user_on_main_page() throws Throwable {
        driver= initializeDriver();
        driver.get(prop.getProperty("url"));

         lp = new LoginPage(driver);
        driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
        driver.manage().window().maximize();
        lp.getUsernameField().sendKeys(prop.getProperty("crmusername"));
        lp.getPasswordField().sendKeys(prop.getProperty("crmpassword"));
        lp.getSubmitButton().click();
    }

    @When("^user click on top menu link$")
    public void user_click_on_top_menu_link() throws Throwable {
        CRMPage tp = new CRMPage(driver);
        for (int i =0; i<tp.topmenuitems.size();i++){
            tp.topmenuitems.get(i).click();
            Thread.sleep(2500);
            System.out.println(driver.getTitle());
            Assert.assertTrue(driver.getTitle().contains("Odoo"));
        }





    }

    @Then("^same number of windows open with active titles$")
    public void same_number_of_windows_open_with_active_titles() throws Throwable {

    }






}
