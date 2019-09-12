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
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Home page login",
  "description": "",
  "id": "application-login;home-page-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User Logs into application with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "home page is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "application-login;home-page-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "application-login;home-page-login;;1"
    },
    {
      "cells": [
        "wrong",
        "wrongpassword"
      ],
      "line": 12,
      "id": "application-login;home-page-login;;2"
    },
    {
      "cells": [
        "posmanager65@info.com",
        "posmanager"
      ],
      "line": 13,
      "id": "application-login;home-page-login;;3"
    },
    {
      "cells": [
        "eventscrmmanager10@info.com",
        "eventscrmmanager"
      ],
      "line": 14,
      "id": "application-login;home-page-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Brite ERP login page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginSteps.user_is_on_Brite_ERP_login_page()"
});
formatter.result({
  "duration": 6438119093,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Home page login",
  "description": "",
  "id": "application-login;home-page-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User Logs into application with \"wrong\" and \"wrongpassword\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "home page is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "wrong",
      "offset": 33
    },
    {
      "val": "wrongpassword",
      "offset": 45
    }
  ],
  "location": "loginSteps.user_Logs_into_application_with_and(String,String)"
});
formatter.result({
  "duration": 2640384751,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.home_page_is_displayed()"
});
formatter.result({
  "duration": 2008182900,
  "error_message": "java.lang.AssertionError: expected [#Inbox - Odoo] but found [Login | Brite ERP - Best solution for startups]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat StepDefinitions.loginSteps.home_page_is_displayed(loginSteps.java:37)\r\n\tat ✽.Then home page is displayed(Login.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 426172423,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Brite ERP login page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginSteps.user_is_on_Brite_ERP_login_page()"
});
formatter.result({
  "duration": 5283475138,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Home page login",
  "description": "",
  "id": "application-login;home-page-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User Logs into application with \"posmanager65@info.com\" and \"posmanager\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "home page is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "posmanager65@info.com",
      "offset": 33
    },
    {
      "val": "posmanager",
      "offset": 61
    }
  ],
  "location": "loginSteps.user_Logs_into_application_with_and(String,String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 7532834300,
=======
  "duration": 4776075598,
>>>>>>> 98fc4e978b3fbee3194f8c0280e0defb90179cfa
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.home_page_is_displayed()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 4595752400,
=======
  "duration": 6018025250,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d76.0.3809.100)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2GB41CN\u0027, ip: \u0027192.168.29.167\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: C:\\Users\\Esra\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:50706}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a58dca26b6e4a4645c09f6818bad3b2a\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat StepDefinitions.loginSteps.home_page_is_displayed(loginSteps.java:37)\r\n\tat ✽.Then home page is displayed(Login.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 6260878865,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d76.0.3809.100)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2GB41CN\u0027, ip: \u0027192.168.29.167\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: C:\\Users\\Esra\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:50706}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a58dca26b6e4a4645c09f6818bad3b2a\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat StepDefinitions.Hooks.embedScreenshot(Hooks.java:75)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Brite ERP login page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginSteps.user_is_on_Brite_ERP_login_page()"
});
formatter.result({
  "duration": 4333671064,
>>>>>>> 98fc4e978b3fbee3194f8c0280e0defb90179cfa
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Home page login",
  "description": "",
  "id": "application-login;home-page-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User Logs into application with \"eventscrmmanager10@info.com\" and \"eventscrmmanager\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "home page is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "eventscrmmanager10@info.com",
      "offset": 33
    },
    {
      "val": "eventscrmmanager",
      "offset": 67
    }
  ],
  "location": "loginSteps.user_Logs_into_application_with_and(String,String)"
});
formatter.result({
  "duration": 9066953,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d76.0.3809.100)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2GB41CN\u0027, ip: \u0027192.168.29.167\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: C:\\Users\\Esra\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:50779}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: eacabd51e39603710c8194a8877bb97a\n*** Element info: {Using\u003did, value\u003dlogin}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy39.sendKeys(Unknown Source)\r\n\tat StepDefinitions.loginSteps.user_Logs_into_application_with_and(loginSteps.java:26)\r\n\tat ✽.When User Logs into application with \"eventscrmmanager10@info.com\" and \"eventscrmmanager\"(Login.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginSteps.home_page_is_displayed()"
});
formatter.result({
<<<<<<< HEAD
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
=======
  "status": "skipped"
});
formatter.after({
  "duration": 55879696,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d76.0.3809.100)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2GB41CN\u0027, ip: \u0027192.168.29.167\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: C:\\Users\\Esra\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:50779}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: eacabd51e39603710c8194a8877bb97a\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat StepDefinitions.Hooks.embedScreenshot(Hooks.java:75)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
>>>>>>> 98fc4e978b3fbee3194f8c0280e0defb90179cfa
});
});