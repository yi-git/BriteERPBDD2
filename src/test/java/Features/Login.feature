@login
Feature:Application Login
Background:
  Given User is on Brite ERP login page
@smoke @regression
Scenario Outline: Home page login
  When User Logs into application with "<username>" and "<password>"
  Then home page is displayed

  Examples:
  |username|password|
  |wrong   |wrongpassword   |
  |posmanager65@info.com    |posmanager    |
  |eventscrmmanager10@info.com|eventscrmmanager|





