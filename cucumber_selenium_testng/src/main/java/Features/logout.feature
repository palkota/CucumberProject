Feature: Logout feature of Zero Bank
Scenario: Logout the particular user

Given Navigate to SignIn Page
When Enter valid username and password
And Click SignIn 
And Click profile name and click Logout
Then User successsfully navigate to home page

