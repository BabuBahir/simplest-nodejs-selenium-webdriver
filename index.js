

// driver.get("http://demo.nopcommerce.com/");
// driver.findElement(By.xpath("(//input[@value='Add to cart'])[2]")).click();
   
// driver.findElement(By.id("add-to-wishlist-button-4")).click();

// driver.findElement(By.css("input.button-2.add-to-compare-list-button")).click();
// driver.findElement(By.id("add-to-cart-button-4")).click();
// driver.findElement(By.linkText("compact")).click();




// driver.quit();
var webdriver = require('selenium-webdriver'); 
var By = webdriver.By;
var until = webdriver.until;
var expect = require('expect');

var driver =new webdriver.Builder()
            .usingServer('http://localhost:4444/wd/hub')
            .withCapabilities(webdriver.Capabilities.chrome()).build(); 

driver.manage().timeouts().implicitlyWait(1000);
 

describe( 'NopCommerce find title' , function(){
 
    before(function(){   
        // a promise is returned while ‘click’ action
        // is registered in ‘driver’ object
        return driver.get("http://demo.nopcommerce.com/");
    });
 
    after(function(){
 
        return driver.quit();
 
    });
 
    it( 'Test Case', function(){
    
        driver.getTitle().then(function(title){
            expect(title).equals("nopCommerce demo store");
        })
    });

});