package StepDefinitions;


import base.Base;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pages.LoginPage;

public class loginSteps extends Base {





    @Given("^User is on Brite ERP login page$")
    public void user_is_on_Brite_ERP_login_page() throws Throwable {

        driver=initializeDriver();
        driver.get(prop.getProperty("url"));
        log.info("Website opened");

    }

    @When("^User Logs into application with username and password$")
    //This could be modified to test different usernames and passwords

    public void user_Logs_into_application_with_username_and_password() throws Throwable {
        LoginPage lp = new LoginPage(driver);

        lp.getUsernameField().sendKeys(prop.getProperty("username"));
        lp.getPasswordField().sendKeys(prop.getProperty("password"));
        lp.getSubmitButton().click();
        log.info("logged in");
        Thread.sleep(2000);

    }

    @Then("^home page is displayed$")
    public void home_page_is_displayed() throws Throwable {
        Thread.sleep(2000);
        Assert.assertEquals(driver.getTitle(), ("#Inbox - Odoo"));
        log.info("Assertion complete");


    }

//    @After
//    public void closeDriver(){
//        driver.close();
//    }

}
