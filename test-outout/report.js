$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Home page login",
  "description": "",
  "id": "application-login;home-page-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@login"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Brite ERP login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Logs into application with username and password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "home page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.user_is_on_Brite_ERP_login_page()"
});
formatter.result({
  "duration": 6145015021,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.user_Logs_into_application_with_username_and_password()"
});
formatter.result({
  "duration": 3562265050,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.home_page_is_displayed()"
});
formatter.result({
  "duration": 2008484253,
  "status": "passed"
});
formatter.after({
  "duration": 170817418,
  "status": "passed"
});
});