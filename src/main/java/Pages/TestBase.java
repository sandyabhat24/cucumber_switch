package Pages;

import java.io.File;
import java.io.IOException;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBase {
	
 public static WebDriver driver;
	
	public static void init() {
		System.setProperty("webdriver.chrome.driver", "Driver/chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		
	}

	public void takescreenshot(WebDriver driver) throws IOException {
		TakesScreenshot ts=(TakesScreenshot)driver;
		File sourcefile=ts.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(sourcefile, new File("screenshot/"+ System.currentTimeMillis() + ".png"));
		
	}
	
	public static int randomnum() {
		Random randomGenerator = new Random();  
		int randomInt = randomGenerator.nextInt(1000);
		return randomInt;
	}
}
