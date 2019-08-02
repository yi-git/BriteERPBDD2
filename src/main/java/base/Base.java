package base;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;


public class Base {
    public static WebDriver driver;
    public static Properties prop;
    public static Logger log;
    public WebDriver initializeDriver() throws IOException {

        prop = new Properties();
        FileInputStream fis = new FileInputStream("src/main/java/config/data.properties");
        prop.load(fis);

        log = LogManager.getLogger(Base.class.getName());
        log.info("Driver initializing");

        String browser = prop.getProperty("browser");
        System.out.println(browser);

        if(browser.equals("chrome"))
        {
            WebDriverManager.chromedriver().setup();
            return new ChromeDriver();
        }

        if(browser.equalsIgnoreCase("firefox"))
        {
            WebDriverManager.firefoxdriver().setup();
            driver = new FirefoxDriver();
        }

        if(browser.equalsIgnoreCase("edge"))
        {
            WebDriverManager.edgedriver().setup();
            driver = new EdgeDriver();
        }

        driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
        driver.manage().window().maximize();



        return driver;



    }

//    public  void getScreenshot(String methodname) throws IOException{
//
//
//        File file=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
//
//        FileUtils.copyFile(file, new File("C:\\Users\\Berdy\\IdeaProjects\\BriteERP\\test-outout\\Screenshots\\"+ methodname+".png"));
//    }



}
