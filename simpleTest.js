var webdriver = require("selenium-webdriver");
var assert = require("chai").assert;


var driver;


//initialize the web driver

driver = new webdriver.Builder().forBrowser("chrome").usingServer('http://localhost:4444/wd/hub').withCapabilities(webdriver.Capabilities.chrome()).build();

//open the web page

driver.get('http://www.google.com');

// find the search box, type 'Cheese!' inside it and submit the form

var element = driver.findElement(webdriver.By.name('q'));
element.sendKeys('Cheese!');
element.submit();

driver.getTitle().then(function (title) {
    if (title.toLocaleLowerCase().indexOf('roger') > -1) {
        console.log("title is correct");
    } else {
        console.log("title is incorrect");
    }
});


driver.quit();