package Options;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/Features",
        glue = "StepDefinitions",
        format = {"pretty", "html:test-outout"},// generate different reports
        monochrome = true, //display console output in readable format
        dryRun = false,
        tags = {"@regression"} )


public class TestRunner {



}
