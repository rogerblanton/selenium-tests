
var webdriver = require("selenium-webdriver");
    var assert = require("assert");
/*
    describe("Demonstrating webdriver promises", function() {
        this.timeout(30000);
        var driver;

        before(function() {
            driver = new webdriver.Builder().forBrowser("chrome").usingServer('http://localhost:4444/wd/hub').withCapabilities(webdriver.Capabilities.chrome()).build();
        });

        after(function() {
            driver.quit();
        });

        it("I open the blog website", function() {
            driver.get("https://team.goodeggs.com/getting-started-with-selenium-webdriver-for-node-js-f262a00c52e1");
        });

        it("The title is 'Scott Logic Blog'", function() {
           driver.wait(function() {
               console.log("roger");
            return driver.getTitle().then(function(title) {
                console.log("roger");
                console.log(title === 'webdriver - Google Search');
                return title === 'webdriver - Google Search';
            });
            }, 3000);
        });
    });
    */
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
        
        return driver.get("http://www.google.com");
        
 
        
 
    });
 
    it("Test-2", function(){
 
        // test Code
        // assertions
        return driver.getTitle().then(function( title ) {
 
    // google page title should be printed 
            console.log("title", title);
            assert.equal(title, "Roger");
 
        });
        
    });
 
    it("Test-3", function(){
 
        // test Code
        // assertions
 
    });
  
});