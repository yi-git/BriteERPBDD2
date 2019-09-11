$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CRM.feature");
formatter.feature({
  "line": 1,
  "name": "Delete an Opportunity",
  "description": "",
  "id": "delete-an-opportunity",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Create Opportunity",
  "description": "",
  "id": "delete-an-opportunity;create-opportunity",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@crm"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "on CRM page \"\u003cnumber\u003e\" time",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on Create button on CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enters details of Opportunity",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Saves",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "New opportunity should be created",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "to run twice",
  "description": "",
  "id": "delete-an-opportunity;create-opportunity;to-run-twice",
  "rows": [
    {
      "cells": [
        "number"
      ],
      "line": 11,
      "id": "delete-an-opportunity;create-opportunity;to-run-twice;1"
    },
    {
      "cells": [
        "first"
      ],
      "line": 12,
      "id": "delete-an-opportunity;create-opportunity;to-run-twice;2"
    },
    {
      "cells": [
        "second"
      ],
      "line": 13,
      "id": "delete-an-opportunity;create-opportunity;to-run-twice;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 24962125100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Create Opportunity",
  "description": "",
  "id": "delete-an-opportunity;create-opportunity;to-run-twice;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@crm"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "on CRM page \"first\" time",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on Create button on CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enters details of Opportunity",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Saves",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "New opportunity should be created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 13
    }
  ],
  "location": "CRMSteps.on_CRM_page(String)"
});
formatter.result({
  "duration": 2892850200,
  "status": "passed"
});
formatter.match({
  "location": "CRMSteps.user_click_on_Create_button_on_CRM()"
});
formatter.result({
  "duration": 134661100,
  "status": "passed"
});
formatter.match({
  "location": "CRMSteps.enters_details_of_Oppotunity()"
});
formatter.result({
  "duration": 2039813200,
  "status": "passed"
});
formatter.match({
  "location": "CRMSteps.saves()"
});
formatter.result({
  "duration": 96995000,
  "status": "passed"
});
formatter.match({
  "location": "CRMSteps.new_opportunity_should_be_create()"
});
formatter.result({
  "duration": 2022317900,
  "status": "passed"
});
formatter.before({
  "duration": 15722838900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Create Opportunity",
  "description": "",
  "id": "delete-an-opportunity;create-opportunity;to-run-twice;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@crm"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "on CRM page \"second\" time",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on Create button on CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enters details of Opportunity",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Saves",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "New opportunity should be created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "second",
      "offset": 13
    }
  ],
  "location": "CRMSteps.on_CRM_page(String)"
});
formatter.result({
  "duration": 2812310600,
  "status": "passed"
});
formatter.match({
  "location": "CRMSteps.user_click_on_Create_button_on_CRM()"
});
formatter.result({
  "duration": 129195700,
  "status": "passed"
});
formatter.match({
  "location": "CRMSteps.enters_details_of_Oppotunity()"
});
formatter.result({
  "duration": 2131606600,
  "status": "passed"
});
formatter.match({
  "location": "CRMSteps.saves()"
});
formatter.result({
  "duration": 88778900,
  "status": "passed"
});
formatter.match({
  "location": "CRMSteps.new_opportunity_should_be_create()"
});
formatter.result({
  "duration": 2024562500,
  "status": "passed"
});
formatter.before({
  "duration": 17206225000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Delete Opportunity",
  "description": "",
  "id": "delete-an-opportunity;delete-opportunity",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@crm"
    },
    {
      "line": 16,
      "name": "@deletecrm"
    },
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "on CRM page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user click on Galaxy Phone",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "deletes the item",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "item should be deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "CRMSteps.on_CRM_page()"
});
formatter.result({
  "duration": 1737045100,
  "status": "passed"
});
formatter.match({
  "location": "CRMSteps.user_click_on_Galaxy_Phone()"
});
formatter.result({
  "duration": 2181453900,
  "status": "passed"
});
formatter.match({
  "location": "CRMSteps.deletes_the_item()"
});
formatter.result({
  "duration": 1357906200,
  "status": "passed"
});
formatter.match({
  "location": "CRMSteps.item_should_be_deleted()"
});
formatter.result({
  "duration": 3087046500,
  "status": "passed"
});
formatter.before({
  "duration": 15163444900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Delete Opportunity List",
  "description": "",
  "id": "delete-an-opportunity;delete-opportunity-list",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@crm"
    },
    {
      "line": 25,
      "name": "@deletecrm"
    },
    {
      "line": 25,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "on CRM page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "user click on List view",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user check Galaxy Phone checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "deletes the item",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "item should be deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "CRMSteps.on_CRM_page()"
});
formatter.result({
  "duration": 2036320600,
  "status": "passed"
});
formatter.match({
  "location": "CRMSteps.user_click_on_List_view()"
});
formatter.result({
  "duration": 163682300,
  "status": "passed"
});
formatter.match({
  "location": "CRMSteps.user_check_Galaxy_Phone_checkbox()"
});
formatter.result({
  "duration": 705925800,
  "status": "passed"
});
formatter.match({
  "location": "CRMSteps.deletes_the_item()"
});
formatter.result({
  "duration": 1418634500,
  "status": "passed"
});
formatter.match({
  "location": "CRMSteps.item_should_be_deleted()"
});
formatter.result({
  "duration": 3047904300,
  "status": "passed"
});
formatter.uri("Login.feature");
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
  "duration": 7532834300,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.user_Logs_into_application_with_username_and_password()"
});
formatter.result({
  "duration": 4595752400,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.home_page_is_displayed()"
});
formatter.result({
  "duration": 2006488800,
  "status": "passed"
});
formatter.uri("POS.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "POS System",
  "description": "",
  "id": "pos-system",
  "keyword": "Feature"
});
formatter.before({
  "duration": 17808667100,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User creates product named iPhone that priced 500 dollars",
  "description": "",
  "id": "pos-system;user-creates-product-named-iphone-that-priced-500-dollars",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    },
    {
      "line": 6,
      "name": "@pos"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user on \"Point of Sale - Odoo\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user click on Products, page opens with title \"Products - Odoo\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click on Create, page opens with title \"New - Odoo\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Iphone\" in product name field should be populated",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters price of \"500\" price field should be updated",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "saves the product",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "product final product should be displayed with correct name and price",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Point of Sale - Odoo",
      "offset": 9
    }
  ],
  "location": "PointOfSalesSteps.user_on_page(String)"
});
formatter.result({
  "duration": 769200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Products - Odoo",
      "offset": 47
    }
  ],
  "location": "PointOfSalesSteps.user_click_on_Products_page_opens_with_title(String)"
});
formatter.result({
  "duration": 4086928400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New - Odoo",
      "offset": 45
    }
  ],
  "location": "PointOfSalesSteps.user_click_on_Create_page_opens_with_title(String)"
});
formatter.result({
  "duration": 2091644500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Iphone",
      "offset": 13
    }
  ],
  "location": "PointOfSalesSteps.user_enters_in_product_name_field_should_be_populated(String)"
});
formatter.result({
  "duration": 202618400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "PointOfSalesSteps.user_enters_price_of_price_field_shoul_be_updated(String)"
});
formatter.result({
  "duration": 26218400,
  "status": "passed"
});
formatter.match({
  "location": "PointOfSalesSteps.saves_the_product()"
});
formatter.result({
  "duration": 136667000,
  "status": "passed"
});
formatter.match({
  "location": "PointOfSalesSteps.product_final_product_should_be_displayed_with_correct_name_and_price()"
});
formatter.result({
  "duration": 1185441000,
  "status": "passed"
});
formatter.before({
  "duration": 18408319600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User delete product named iPhone that priced 1.00 dollar",
  "description": "",
  "id": "pos-system;user-delete-product-named-iphone-that-priced-1.00-dollar",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    },
    {
      "line": 18,
      "name": "@pos"
    },
    {
      "line": 18,
      "name": "@delete"
    },
    {
      "line": 18,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user on \"Point of Sale - Odoo\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user click on Products, page opens with title \"Products - Odoo\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "searches for \"Iphone\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Point of Sale - Odoo",
      "offset": 9
    }
  ],
  "location": "PointOfSalesSteps.user_on_page(String)"
});
formatter.result({
  "duration": 561900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Products - Odoo",
      "offset": 47
    }
  ],
  "location": "PointOfSalesSteps.user_click_on_Products_page_opens_with_title(String)"
});
formatter.result({
  "duration": 4085126900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Iphone",
      "offset": 14
    }
  ],
  "location": "PointOfSalesSteps.searches_for(String)"
});
formatter.result({
  "duration": 225082400,
  "status": "passed"
});
});