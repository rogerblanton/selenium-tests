//One of the important things to note in this file is that in each test, we return the selenium promise.
//If you don't return the selenium promise, the test will conclude before selenium finishes executing as JS is asynchronous.

var webdriver = require("selenium-webdriver");
var assert = require("assert");

describe("Inner Suite 1", function(){
  
    var driver;
    
    before(function(){
        
        // do something before test suite execution
        // no matter if there are failed cases
        driver = new webdriver.Builder().forBrowser("chrome").usingServer('http://localhost:4444/wd/hub').withCapabilities(webdriver.Capabilities.chrome()).build();
    
        return driver;
    });
 
    after(function(){
 
        // do something after test suite execution is finished
        // no matter if there are failed cases
        return driver.quit();
 
    });
    
    beforeEach(function(){
        
        // do something before test case execution
        // no matter if there are failed cases
    
    });
 
    afterEach(function(){
 
        // do something after test case execution is finished
        // no matter if there are failed cases
 
    });
  
    it("Test-1", function(){
        
        //Open the webpage Google
        //Notice we are use return here as driver.get() returns a promise.
        return driver.get("http://www.google.com");

    });
 
    it("Test-2", function(){
 
        // test Code
        // assertions
		//Notice we are use return here as driver.get() returns a promise.
        return driver.getTitle().then(function( title ) {
		    // google page title should be printed 
			console.log("title", title);
			// Demonstrating a failed test
            assert.equal(title, "Roger");
        });
        
    });
 
    it("Test-3", function(){
 
        // test Code
        // assertions
 
    });
  
});