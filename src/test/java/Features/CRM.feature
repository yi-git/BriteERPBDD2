Feature: Delete an Opportunity

@crm @regression
Scenario Outline:Create Opportunity
  Given on CRM page "<number>" time
  When user click on Create button on CRM
  And Enters details of Opportunity
  And Saves
  Then New opportunity should be created
  Examples: to run twice
  |number|
  |first |
  |second|


@crm @deletecrm @regression
Scenario:Delete Opportunity
  Given on CRM page
  When user click on Galaxy Phone
  And deletes the item
  Then item should be deleted



  @crm @deletecrm @regression
  Scenario:Delete Opportunity List
    Given on CRM page
    When user click on List view
    And user check Galaxy Phone checkbox
    And deletes the item
    Then item should be deleted