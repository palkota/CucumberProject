Feature: Login feature of Zero Bank

Scenario: Login to Zero Bank with valid credentail

Given Navigate to SignIn Page
When Enter valid username and password
And Click SignIn 
Then User successfully naviagted to Account Summary page
