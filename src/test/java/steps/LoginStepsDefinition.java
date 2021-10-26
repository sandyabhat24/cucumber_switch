package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Wait;

import Pages.AddAccount;
import Pages.DatabasePage;
import Pages.LoginPage;
import Pages.TestBase;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepsDefinition extends TestBase{
	
	LoginPage loginPage;
	AddAccount addAccountPage;
	DatabasePage databasePage;
	public String title="";
	
	@Before
	public void beforeRun() {
		TestBase.init();
		loginPage=PageFactory.initElements(driver, LoginPage.class);
		addAccountPage=PageFactory.initElements(driver, AddAccount.class);
		databasePage=new DatabasePage();
	}
	
	@Given  ("^User is on the Techfios login Page$")
	public void User_is_on_the_Techfios_login_Page() {
		
		driver.get("http://www.techfios.com/billing/?ng=admin/");
	}
	
	
	@When ("^User enters username as \"([^\"]*)\"$") 
	public void User_enters_username_as(String username) {
		loginPage.insertUserName(username);
		
	}
	
	@When("^User enters \"([^\"]*)\" from MYSQL database$")
	public void user_enters_from_MYSQL_database(String data) throws Throwable {
	    switch(data) {
	    case "username":
	    	loginPage.insertUserName(databasePage.getData("username"));
	    	break;
	    case "password":
	    	loginPage.insertPassword(databasePage.getData("password"));
	    	break;
	    default:
	    	System.out.println("Not valid");
	    }
	}
	
	@When ("^User enters password as \"([^\"]*)\"$")
	public void User_enters_password_as(String password) {
		loginPage.insertPassword(password);
		
	}
	
	@And("^User clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String button)  {
		
		switch(button) {
		case "Signin": 
			loginPage.clickSigninButton();
			break;
		case "Bank & Cash":
		    addAccountPage.clickBankNCash();
		    break;
		case "New Account":
			addAccountPage.clickOnNewAccount();
			break;
		case "submit":
			addAccountPage.clickOnSubmiButton();
			break;
		}
		
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() throws Throwable {
		
		System.out.println(driver.getTitle());
		//if (driver.getTitle().contains("Dashboard"))
		if (driver.getPageSource().contains("Dashboard"))
		Assert.assertTrue(true);
		else
			Assert.assertTrue(false);
	}
	

		@Then("^User lands on new account page$")
		public void user_lands_on_new_account_page() throws Throwable {
			if (driver.getPageSource().contains("Accounts"))
				Assert.assertTrue(true);
				else
					Assert.assertTrue(false);
		   
		}

		
		@Then("^user enters new account information account title \"([^\"]*)\" description \"([^\"]*)\" account balance \"([^\"]*)\" account number \"([^\"]*)\" contact person \"([^\"]*)\" contact phone \"([^\"]*)\" banking url \"([^\"]*)\"$")
		public void user_enters_new_account_information_account_title_ACCOUNT_TITLE_ELEMENT_description_ACCOUNT_DESCRIPTION_ELEMENT_account_balance_ACCOUNT_BALANCE_ELEMENT_account_number_ACCOUNT_NUMBER_ELEMENT_contact_person_CONTACT_PERSON_ELEMENT_contact_phone_CONTACT_PHONE_ELEMENT_banking_url_BANKING_URL_ELEMENT(String account_title,String description, String account_balance, String account_number, String contact_person, String contact_phone, String banking_url) throws Throwable {
			addAccountPage.setAccountTitle(account_title);	
			addAccountPage.setAccountDescription(description);
			addAccountPage.setAccountBalance(account_balance);
			addAccountPage.setAccountNumber(account_number);
			addAccountPage.setContactPerson(contact_person);
			addAccountPage.setContactPhone(contact_phone);
			addAccountPage.setBankingURL(banking_url);
			//driver.wait(2000);
			addAccountPage.clickOnSubmiButton();		
		}

		@Then("^close the browser$")
		public void close_the_browser() throws Throwable {
		   // driver.close();
		   // driver.quit();
		}
		
		@Then("^user enters new account information \"([^\"]*)\" \"([^\"]*)\"$")
		public void user_enters_new_account_information(String element,String arg1) throws Throwable {
		   switch(element)  {
		      case "ACCOUNT_TITLE":
		    	  addAccountPage.setAccountTitle(arg1);
		    	  break;
		      case "ACCOUNT_DESCRIPTION":
		    	  addAccountPage.setAccountDescription(arg1);
		    	  break;
		      case "ACCOUNT_BALANCE":
		    	  addAccountPage.setAccountBalance(arg1);
		    	  break;
		      case "ACCOUNT_NUMBER":
		    	  addAccountPage.setAccountNumber(arg1);
		    	  break;
		      case "CONTACT_PERSON":
		    	  addAccountPage.setContactPerson(arg1);
		    	  break;
		      case "CONTACT_PHONE":
		    	  addAccountPage.setContactPhone(arg1);
		    	  break;
		      case "BANKING_URL":
		    	  addAccountPage.setBankingURL(arg1);
		    	  break;
		      default:
		    	  System.out.println("invalid option");
		    	  
		    	  
		   }
		    
		}
		
		@Then("^user checks the success message$")
		public void user_checks_the_success_message() throws Throwable {
			if (driver.getPageSource().contains("Account Created Successfully"))
				Assert.assertTrue(true);
				else
					Assert.assertTrue(false);
		}

	}

  




