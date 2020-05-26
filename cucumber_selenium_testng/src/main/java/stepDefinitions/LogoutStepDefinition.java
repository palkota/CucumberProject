package stepDefinitions;

import java.sql.Driver;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LogoutStepDefinition {
	static WebDriver driver;
	@When("^Click profile name and click Logout$")
	public void click_profile_name_and_click_Logout() throws Throwable {
	    driver = LoginStepDefinition.driver;
	    driver.findElement(By.cssSelector("#settingsBox>ul>li:nth-child(3)>a")).click();
	    driver.findElement(By.id("logout_link")).click();
	}

	@Then("^User successsfully navigate to home page$")
	public void user_successsfully_navigate_to_home_page() throws Throwable {
	    Assert.assertEquals(driver.getTitle(), "Zero - Personal Banking - Loans - Credit Cards");
	}
}
