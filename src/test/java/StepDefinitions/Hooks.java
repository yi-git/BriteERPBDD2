package StepDefinitions;

import base.Base;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.CRMPage;
import pages.LoginPage;
import pages.PointOfSalePage;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class Hooks extends Base {

    @Before ("@pos, @delete")
    public void initialize() throws IOException, InterruptedException {
        driver= initializeDriver();
        driver.get(prop.getProperty("url"));

        LoginPage lp = new LoginPage(driver);
        driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
        driver.manage().window().maximize();
        lp.getUsernameField().sendKeys(prop.getProperty("username"));
        lp.getPasswordField().sendKeys(prop.getProperty("password"));
        lp.getSubmitButton().click();

        Thread.sleep(3000);
        PointOfSalePage pos = new PointOfSalePage(driver);
        pos.getTMpointOfSale().click();
        Thread.sleep(2000);
    }

    @Before ("@crm , @deletecrm")
    public void initializeCRM() throws IOException, InterruptedException {
        driver= initializeDriver();
        driver.get(prop.getProperty("url"));

        LoginPage lp = new LoginPage(driver);
        driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
        driver.manage().window().maximize();
        lp.getUsernameField().sendKeys(prop.getProperty("crmusername"));
        lp.getPasswordField().sendKeys(prop.getProperty("crmpassword"));
        lp.getSubmitButton().click();
        WebDriverWait wait = new WebDriverWait(driver,10);
        //wait.until(ExpectedConditions.invisibilityOfElementLocated(By.xpath("//div[@class='o_loading']")));
        Thread.sleep(2000);
        CRMPage crm = new CRMPage(driver);
        crm.getTMCRM().click();
        //Thread.sleep(1000);
    }




    @After
    public void embedScreenshot(Scenario scenario) throws InterruptedException {
        if (scenario.isFailed()) {
            try {
                File file=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);

                FileUtils.copyFile(file, new File("C:\\Users\\Berdy\\IdeaProjects\\BriteERP\\test-outout\\Screenshots\\"+ scenario.getName()+".png"));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        driver.close();
        //changes
    }




}
