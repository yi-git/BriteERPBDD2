package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;

import java.util.List;

public class TopMenu {

//    public TopMenu (WebDriver driver ){
//        this.driver = driver;
//        PageFactory.initElements(driver,this);
//    }



    WebDriver driver;

    @FindBys(@FindBy (xpath ="//ul[@class='nav navbar-nav navbar-left oe_application_menu_placeholder']/li/a[starts-with(@href,'/web')]"))
    public List<WebElement> topmenuitems;

    @FindBy(xpath = "//span[@class='oe_menu_text'][contains(text(),'Point of Sale')]")
    private WebElement TMpointOfSale;

    @FindBy(xpath = "//span[@class='oe_menu_text'][contains(text(),'Website')]")
    private WebElement TMwebsite;

    @FindBy(xpath = "//span[@class='oe_menu_text'][contains(text(),'Sales')]")
    private WebElement TMsales;

    @FindBy(xpath = "//span[@class='oe_menu_text'][contains(text(),'Purchases')]")
    private WebElement TMpurchases;

    @FindBy(xpath = "//span[@class='oe_menu_text'][contains(text(),'CRM')]")
    private WebElement TMCRM;

    @FindBy(xpath = "//span[@class='oe_menu_text'][contains(text(),'Inventory')]")
    private WebElement TMinventory;

    public WebElement getTMpointOfSale() {
        return TMpointOfSale;
    }

    public WebElement getTMwebsite() {
        return TMwebsite;
    }

    public WebElement getTMsales() {
        return TMsales;
    }

    public WebElement getTMpurchases() {
        return TMpurchases;
    }

    public WebElement getTMCRM() {
        return TMCRM;
    }

    public WebElement getTMinventory() {
        return TMinventory;
    }
}

