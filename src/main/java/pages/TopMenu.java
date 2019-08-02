package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class TopMenu {





    WebDriver driver;



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

