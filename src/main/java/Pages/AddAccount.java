package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AddAccount extends TestBase {

	WebDriver driver;
	
	public AddAccount(WebDriver driver) {
		this.driver=driver;
	}
	
	@FindBy(how=How.XPATH, using="//span[text()='Bank & Cash']") WebElement BANK_CASH_ELEMENT;
	
	@FindBy(how=How.XPATH, using="//a[text()='New Account']") WebElement NEW_ACCOUNT_ELEMENT;
	
	@FindBy(how=How.XPATH, using="//h2[contains(text(),' Accounts')]") WebElement ADD_ACCOUNT_PAGE_TITLE;
	
	@FindBy(how=How.XPATH, using="//input[@id='account']") WebElement ACCOUNT_TITLE_ELEMENT;
	
	@FindBy(how=How.XPATH, using="//input[@id='description']") WebElement ACCOUNT_DESCRIPTION_ELEMENT;
	
	@FindBy(how=How.XPATH, using="//input[@id='balance']") WebElement ACCOUNT_BALANCE_ELEMENT;
	
	@FindBy(how=How.XPATH, using="//input[@id='account_number']") WebElement ACCOUNT_NUMBER_ELEMENT;
	
	@FindBy(how=How.XPATH, using="//input[@id='contact_person']") WebElement CONTACT_PERSON_ELEMENT;
	
	@FindBy(how=How.XPATH, using="//input[@id='contact_phone']") WebElement CONTACT_PHONE_ELEMENT;
	
	@FindBy(how=How.XPATH, using="//input[@id='ib_url']") WebElement BANKING_URL_ELEMENT;
	
	@FindBy(how=How.XPATH, using="//*[contains(text(),' Submit')]") WebElement SIGNIN_BUTTON;
	
	@FindBy(how=How.XPATH, using="//div[@class='alert alert-success fade in']/i") WebElement SUCCESS_MESSAGE;
	
	public void clickBankNCash()
	{
		BANK_CASH_ELEMENT.click();
	}
	
	public void clickOnNewAccount()
	{
		NEW_ACCOUNT_ELEMENT.click();
	}
	
	public String getPageTitle() {
		return ADD_ACCOUNT_PAGE_TITLE.getText();
	}
	
	public void setAccountTitle(String account_title) {
		ACCOUNT_TITLE_ELEMENT.sendKeys(TestBase.randomnum() + account_title);
	}
	
	
	public void setAccountDescription(String account_description) {
		ACCOUNT_DESCRIPTION_ELEMENT.sendKeys(TestBase.randomnum() + account_description);
	}
	
	public void setAccountBalance(String account_balance) {
		ACCOUNT_BALANCE_ELEMENT.sendKeys(TestBase.randomnum() + account_balance);
	}
	
	
	
	public void setAccountNumber(String account_number) {
		ACCOUNT_NUMBER_ELEMENT.sendKeys(TestBase.randomnum() + account_number);
	}
	
	public void setContactPerson(String contact_person) {
		 CONTACT_PERSON_ELEMENT.sendKeys(TestBase.randomnum() + contact_person);
	}
	
	public void setContactPhone(String contact_phone) {
		CONTACT_PHONE_ELEMENT.sendKeys(TestBase.randomnum() + contact_phone);
	}
	
	public void setBankingURL(String banking_url) {
		BANKING_URL_ELEMENT.sendKeys(TestBase.randomnum()+banking_url);
	}
	
	
	public void clickOnSubmiButton() {
		SIGNIN_BUTTON.click();
	}
	
	public String  checkSuccessMessage() {
		return SUCCESS_MESSAGE.getText();
	}
	
}
