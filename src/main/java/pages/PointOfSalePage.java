package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PointOfSalePage extends TopMenu {

    public PointOfSalePage(WebDriver driver ) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    //Left menu Links
    @FindBy(xpath = "//li[@class='']//span[@class='oe_menu_text'][contains(text(),'Orders')]")
    private WebElement dashboardOrders;

    @FindBy (xpath = "//span[contains(text(),'Sessions')]" )
    private WebElement sessions;

    @FindBy (xpath = "//div[8]//ul[2]//li[1]//a[1]//span[1]")
    private WebElement products;

    @FindBy (xpath = "//div[8]//ul[2]//li[2]//a[1]//span[1]")
    private WebElement pricelists;

    @FindBy (xpath = "//div[8]//ul[3]//li[1]//a[1]//span[1]")
    private WebElement reportingOrders;

    @FindBy (xpath = "//span[contains(text(),'Sales Details')]" )
    private WebElement salesDetails;

    @FindBy (xpath = "//a[@class='oe_menu_leaf']//span[@class='oe_menu_text'][contains(text(),'Point of Sale')]")
    private WebElement configurationPointOfSale;


    //Create product steps
    @FindBy (xpath = "//button[@class='btn btn-primary btn-sm o-kanban-button-new btn-default']")
    private WebElement createProduct;

    @FindBy (xpath = "//input[@class='o_field_char o_field_widget o_input o_required_modifier']")
    private WebElement enterProductName;

    @FindBy(xpath = "//input[@class='o_input']")
    private WebElement salePrice;

    @FindBy (xpath = "//input[@class='o_searchview_input']")
    private WebElement searchField;

    public WebElement getSearchField() {
        return searchField;
    }

    public WebElement getCreateProduct() {
        return createProduct;
    }

    public WebElement getEnterProductName() {
        return enterProductName;
    }

    public WebElement getSalePrice() {
        return salePrice;
    }

    public WebElement getSaveProduct() {
        return saveProduct;
    }

    public WebElement getProductName() {
        return productName;
    }

    @FindBy (xpath = "//button[@class='btn btn-primary btn-sm o_form_button_save']")
    private WebElement saveProduct;

    @FindBy (xpath = "//span[@name='name']")
    private WebElement productName;

    @FindBy (xpath = "//span[@name='list_price']")
    private WebElement productPrice;

    public WebElement getProductPrice() {
        return productPrice;
    }

    public WebElement getDashboardOrders() {
        return dashboardOrders;
    }

    public WebElement getSessions() {
        return sessions;
    }

    public WebElement getProducts() {
        return products;
    }

    public WebElement getPricelists() {
        return pricelists;
    }

    public WebElement getReportingOrders() {
        return reportingOrders;
    }

    public WebElement getSalesDetails() {
        return salesDetails;
    }

    public WebElement getConfigurationPointOfSale() {
        return configurationPointOfSale;
    }
}

