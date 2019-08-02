package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class CRMPage extends TopMenu {

    WebDriver driver;

    public CRMPage(WebDriver driver ){
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }


    @FindBy (xpath = "//button[contains(text(),'Create')]")
    public WebElement create;

    @FindBys( @FindBy(xpath = "//div[@class = 'oe_kanban_content']/div/strong/span"))
    public List <WebElement> items;

    @FindBy (xpath = "//button[contains(text(),'Action')]")
    public WebElement action;

    @FindBy (xpath = "//a[contains(text(),'Delete')]")
    public WebElement delete;

    @FindBy (xpath = "//span[contains(text(),'Ok')]")
    public WebElement deleteOK;

    @FindBy (css = "input[class = 'o_field_char o_field_widget o_input o_required_modifier']")
    public WebElement opportunityTitle;

    @FindBy (xpath = "//div[@class='o_input_dropdown']/input")
    public WebElement customer;

    @FindBy (xpath = "//div[@class='o_row']/input")
    public WebElement expectedRevenue;

    @FindBy (xpath = "//button[@name='close_dialog']//span[contains(text(),'Create')]")
    public WebElement createOpportunity;

    @FindBy (xpath = "//button[@aria-label='list']")
    public WebElement list;

    @FindBys(@FindBy (xpath ="//td[@class='o_data_cell o_required_modifier']" ))
    public List<WebElement> listedItems;

    @FindBys(@FindBy (xpath ="//tbody//input[@type='checkbox']"))
    public List<WebElement> listCheckboxes;




}
