$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TF_Login_switchCase.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios login validation driving data from mysql database",
  "description": "",
  "id": "techfios-login-validation-driving-data-from-mysql-database",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Testswitch"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-login-validation-driving-data-from-mysql-database;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on the Techfios login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on \"Signin\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"Bank \u0026 Cash\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"New Account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User lands on new account page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters new account information \"ACCOUNT_TITLE\" \"\u003cACCOUNT_TITLE_ELEMENT\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters new account information \"ACCOUNT_DESCRIPTION\" \"\u003cACCOUNT_DESCRIPTION_ELEMENT\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters new account information \"ACCOUNT_BALANCE\" \"\u003cACCOUNT_BALANCE_ELEMENT\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters new account information \"ACCOUNT_NUMBER\" \"\u003cACCOUNT_NUMBER_ELEMENT\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enters new account information \"CONTACT_PERSON\" \"\u003cCONTACT_PERSON_ELEMENT\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters new account information \"CONTACT_PHONE\" \"\u003cCONTACT_PHONE_ELEMENT\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters new account information \"BANKING_URL\" \"\u003cBANKING_URL_ELEMENT\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user checks the success message",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "techfios-login-validation-driving-data-from-mysql-database;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "ACCOUNT_TITLE_ELEMENT",
        "ACCOUNT_DESCRIPTION_ELEMENT",
        "ACCOUNT_BALANCE_ELEMENT",
        "ACCOUNT_NUMBER_ELEMENT",
        "CONTACT_PERSON_ELEMENT",
        "CONTACT_PHONE_ELEMENT",
        "BANKING_URL_ELEMENT"
      ],
      "line": 25,
      "id": "techfios-login-validation-driving-data-from-mysql-database;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "sssseee1",
        "vvvv9v",
        "10000",
        "a6aaa",
        "yy6yy",
        "pppp4p",
        "http://www.wellsfargo.com"
      ],
      "line": 26,
      "id": "techfios-login-validation-driving-data-from-mysql-database;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2856527700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-login-validation-driving-data-from-mysql-database;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Testswitch"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the Techfios login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on \"Signin\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"Bank \u0026 Cash\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"New Account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User lands on new account page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters new account information \"ACCOUNT_TITLE\" \"sssseee1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters new account information \"ACCOUNT_DESCRIPTION\" \"vvvv9v\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters new account information \"ACCOUNT_BALANCE\" \"10000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters new account information \"ACCOUNT_NUMBER\" \"a6aaa\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enters new account information \"CONTACT_PERSON\" \"yy6yy\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters new account information \"CONTACT_PHONE\" \"pppp4p\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters new account information \"BANKING_URL\" \"http://www.wellsfargo.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user checks the success message",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsDefinition.User_is_on_the_Techfios_login_Page()"
});
formatter.result({
  "duration": 2531877000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepsDefinition.User_enters_password_as(String)"
});
formatter.result({
  "duration": 148608900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepsDefinition.User_enters_username_as(String)"
});
formatter.result({
  "duration": 136341500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Signin",
      "offset": 16
    }
  ],
  "location": "LoginStepsDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 2008353900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 82786400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank \u0026 Cash",
      "offset": 16
    }
  ],
  "location": "LoginStepsDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 116733900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Account",
      "offset": 16
    }
  ],
  "location": "LoginStepsDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 913873900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinition.user_lands_on_new_account_page()"
});
formatter.result({
  "duration": 47572200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACCOUNT_TITLE",
      "offset": 37
    },
    {
      "val": "sssseee1",
      "offset": 53
    }
  ],
  "location": "LoginStepsDefinition.user_enters_new_account_information(String,String)"
});
formatter.result({
  "duration": 132459500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACCOUNT_DESCRIPTION",
      "offset": 37
    },
    {
      "val": "vvvv9v",
      "offset": 59
    }
  ],
  "location": "LoginStepsDefinition.user_enters_new_account_information(String,String)"
});
formatter.result({
  "duration": 117710300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACCOUNT_BALANCE",
      "offset": 37
    },
    {
      "val": "10000",
      "offset": 55
    }
  ],
  "location": "LoginStepsDefinition.user_enters_new_account_information(String,String)"
});
formatter.result({
  "duration": 145041900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACCOUNT_NUMBER",
      "offset": 37
    },
    {
      "val": "a6aaa",
      "offset": 54
    }
  ],
  "location": "LoginStepsDefinition.user_enters_new_account_information(String,String)"
});
formatter.result({
  "duration": 120349400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CONTACT_PERSON",
      "offset": 37
    },
    {
      "val": "yy6yy",
      "offset": 54
    }
  ],
  "location": "LoginStepsDefinition.user_enters_new_account_information(String,String)"
});
formatter.result({
  "duration": 137865000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CONTACT_PHONE",
      "offset": 37
    },
    {
      "val": "pppp4p",
      "offset": 53
    }
  ],
  "location": "LoginStepsDefinition.user_enters_new_account_information(String,String)"
});
formatter.result({
  "duration": 119322400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BANKING_URL",
      "offset": 37
    },
    {
      "val": "http://www.wellsfargo.com",
      "offset": 51
    }
  ],
  "location": "LoginStepsDefinition.user_enters_new_account_information(String,String)"
});
formatter.result({
  "duration": 146728900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 16
    }
  ],
  "location": "LoginStepsDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 1426068700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinition.user_checks_the_success_message()"
});
formatter.result({
  "duration": 258980300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinition.close_the_browser()"
});
formatter.result({
  "duration": 155600,
  "status": "passed"
});
});