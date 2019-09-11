@links
Feature: Links Check

  Background: user logged in
  Scenario: check top menu link
    Given user on main page
    When user click on top menu link
    Then same number of windows open with active titles

