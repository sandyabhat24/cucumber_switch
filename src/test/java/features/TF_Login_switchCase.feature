@Testswitch
Feature: Techfios login validation driving data from mysql database

Scenario Outline: User should be able to login with valid credentials
Given  User is on the Techfios login Page 
When User enters password as "abc123" 
When User enters username as "demo@techfios.com"    
And User clicks on "Signin"
Then User should land on Dashboard page
Then User clicks on "Bank & Cash"
Then User clicks on "New Account"
Then User lands on new account page
And user enters new account information "ACCOUNT_TITLE" "<ACCOUNT_TITLE_ELEMENT>"  
And user enters new account information "ACCOUNT_DESCRIPTION" "<ACCOUNT_DESCRIPTION_ELEMENT>"
And user enters new account information "ACCOUNT_BALANCE" "<ACCOUNT_BALANCE_ELEMENT>"
And user enters new account information "ACCOUNT_NUMBER" "<ACCOUNT_NUMBER_ELEMENT>"
And user enters new account information "CONTACT_PERSON" "<CONTACT_PERSON_ELEMENT>" 
And user enters new account information "CONTACT_PHONE" "<CONTACT_PHONE_ELEMENT>"
And user enters new account information "BANKING_URL" "<BANKING_URL_ELEMENT>" 
And User clicks on "submit"
Then user checks the success message 
And close the browser 

Examples:
|ACCOUNT_TITLE_ELEMENT |ACCOUNT_DESCRIPTION_ELEMENT | ACCOUNT_BALANCE_ELEMENT| ACCOUNT_NUMBER_ELEMENT | CONTACT_PERSON_ELEMENT | CONTACT_PHONE_ELEMENT | BANKING_URL_ELEMENT |
|sssseee1|vvvv9v|10000|a6aaa|yy6yy|pppp4p|http://www.wellsfargo.com|