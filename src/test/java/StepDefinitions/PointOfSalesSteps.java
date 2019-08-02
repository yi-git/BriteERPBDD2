package StepDefinitions;

import base.Base;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.Keys;
import org.testng.Assert;
import pages.PointOfSalePage;


public class PointOfSalesSteps extends Base {

    PointOfSalePage pos ;

    @Given("^user on \"([^\"]*)\" page$")
    public void user_on_page(String arg1) throws Throwable {
        //Assert.assertEquals(driver.getTitle(),arg1);
        pos=new PointOfSalePage(driver);


    }



    @And("^user click on Products, page opens with title \"([^\"]*)\"$")
    public void user_click_on_Products_page_opens_with_title(String arg1) throws Throwable {
        pos.getProducts().click();
        Thread.sleep(4000);
        //Assert.assertEquals(driver.getTitle(),arg1);

    }


    @And("^user click on Create, page opens with title \"([^\"]*)\"$")
    public void user_click_on_Create_page_opens_with_title(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        pos.getCreateProduct().click();
         Thread.sleep(2000);
    }

    @And("^user enters \"([^\"]*)\" in product name field should be populated$")
    public void user_enters_in_product_name_field_should_be_populated(String arg1) throws Throwable {
        pos.getEnterProductName().sendKeys(arg1);
        System.out.println(pos.getEnterProductName().getText());
    }

    @And("^user enters price of \"([^\"]*)\" price field should be updated$")
    public void user_enters_price_of_price_field_shoul_be_updated(String arg1) throws Throwable {
        //  pos.getSalePrice().;
        System.out.println("Getting price " + pos.getSalePrice().getText());
    }

    @When("^saves the product$")
    public void saves_the_product() throws Throwable {
        pos.getSaveProduct().click();


    }


    @Then("^product final product should be displayed with correct name and price$")
    public void product_final_product_should_be_displayed_with_correct_name_and_price() throws Throwable {
        Assert.assertEquals(pos.getProductName().getText(),"Iphone");
        Assert.assertEquals(pos.getProductPrice().getText(), "$ 1.00");


    }

    @When("^searches for \"([^\"]*)\"$")
    public void searches_for(String arg1) throws Throwable {
        pos.getSearchField().sendKeys(arg1, Keys.ENTER);

    }


}

