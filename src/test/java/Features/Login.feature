
Feature:Application Login

@smoke @login @regression
Scenario: Home page login
Given User is on Brite ERP login page
When User Logs into application with username and password
Then home page is displayed


