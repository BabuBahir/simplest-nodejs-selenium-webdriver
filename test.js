var webdriver = require('selenium-webdriver'); 
var By = webdriver.By;
var until = webdriver.until;
var assert = require('assert');



var driver =new webdriver.Builder()
            .usingServer('http://localhost:4444/wd/hub')
            .withCapabilities(webdriver.Capabilities.chrome()).build(); 

driver.manage().timeouts().implicitlyWait(1000);
 

describe( 'NopCommerce' , function(done){      
    after(function(){
        return driver.quit(); 
    });

    it( 'find title ', function(done){
        driver.get("http://demo.nopcommerce.com/");
        driver.getTitle().then(function(title){  
            console.log(title);           
            assert.equal(title, "nopCommerce demo store", "My message goes here"); 
            done();   
        })
         
    });

});