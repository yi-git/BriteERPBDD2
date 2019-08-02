package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    WebDriver driver;

    public LoginPage(WebDriver driver ){
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }

    @FindBy (id = "login")
    private WebElement usernameField;

    @FindBy (id = "password")
    private WebElement passwordField;

    @FindBy (xpath ="//button[@type='submit']")
    private WebElement submitButton;





    public WebElement getUsernameField() {
        return usernameField;
    }

    public WebElement getPasswordField() {
        return passwordField;
    }

    public WebElement getSubmitButton() {
        return submitButton;
    }




}

