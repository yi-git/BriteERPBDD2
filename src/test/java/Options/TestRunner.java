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
<<<<<<< HEAD
        tags = {"@regression"} )
=======
        tags = {"@login"}
         )
>>>>>>> 98fc4e978b3fbee3194f8c0280e0defb90179cfa


public class TestRunner {



}
