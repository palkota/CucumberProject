$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature of Zero Bank",
  "description": "",
  "id": "login-feature-of-zero-bank",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login to Zero Bank with valid credentail",
  "description": "",
  "id": "login-feature-of-zero-bank;login-to-zero-bank-with-valid-credentail",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Navigate to SignIn Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User successfully naviagted to Account Summary page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.navigate_to_SignIn_Page()"
});
formatter.result({
  "duration": 23925887500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enter_valid_username_and_password()"
});
formatter.result({
  "duration": 607044700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_SignIn()"
});
formatter.result({
  "duration": 2541483300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_successfully_naviagted_to_Account_Summary_page()"
});
formatter.result({
  "duration": 106856800,
  "status": "passed"
});
formatter.uri("logout.feature");
formatter.feature({
  "line": 1,
  "name": "Logout feature of Zero Bank",
  "description": "",
  "id": "logout-feature-of-zero-bank",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Logout the particular user",
  "description": "",
  "id": "logout-feature-of-zero-bank;logout-the-particular-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Navigate to SignIn Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click profile name and click Logout",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User successsfully navigate to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.navigate_to_SignIn_Page()"
});
formatter.result({
  "duration": 10000606900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enter_valid_username_and_password()"
});
formatter.result({
  "duration": 474290600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_SignIn()"
});
formatter.result({
  "duration": 2741053500,
  "status": "passed"
});
formatter.match({
  "location": "LogoutStepDefinition.click_profile_name_and_click_Logout()"
});
formatter.result({
  "duration": 1172781100,
  "status": "passed"
});
formatter.match({
  "location": "LogoutStepDefinition.user_successsfully_navigate_to_home_page()"
});
formatter.result({
  "duration": 15632600,
  "status": "passed"
});
});