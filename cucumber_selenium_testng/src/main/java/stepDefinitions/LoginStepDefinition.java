package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
	public static WebDriver driver;
	@Given("^Navigate to SignIn Page$")
	public void navigate_to_SignIn_Page() throws Throwable {
		System.setProperty("webdriver.chrome.driver","D:\\PALLU-QA-SOFTWARE\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://zero.webappsecurity.com/");
		driver.findElement(By.id("signin_button")).click();
	}

	@When("^Enter valid username and password$")
	public void enter_valid_username_and_password() throws Throwable {
		driver.findElement(By.id("user_login")).sendKeys("username");
		driver.findElement(By.id("user_password")).sendKeys("password");
	}

	@When("^Click SignIn$")
	public void click_SignIn() throws Throwable {
		driver.findElement(By.name("submit")).click();
	}

	@Then("^User successfully naviagted to Account Summary page$")
	public void user_successfully_naviagted_to_Account_Summary_page() throws Throwable {
	    Assert.assertEquals(driver.getTitle(), "Zero - Account Summary");
	}
}
