@DatabaseTest
Feature: Techfios login validation driving data from mysql database

Scenario: User should be able to login with valid credentials
Given  User is on the Techfios login Page 
When User enters "username" from MYSQL database
When User enters "password" from MYSQL database   
And User clicks on "Signin"
Then User should land on Dashboard page
