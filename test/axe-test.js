var selenium   = require('selenium-webdriver');
var AxeBuilder = require('axe-webdriverjs');
var assert     = require('assert');

describe('Accessibility testing', function(){
 var browser ;
 
 beforeEach(function(done) {
    browser = new selenium.Builder()
    .forBrowser('chrome')
    .build();

  browser.get('http://localhost:8080')
      .then(function() {
        done();
      });
  });
  afterEach(function (done){
    browser.quit().then(function(){
      done();
    });
  });

  it('should detect html-language', function (done) {
		AxeBuilder(browser)
			.withRules('html-has-lang')
			.analyze(function (results) {
        if (results.violations.length > 0) {
            console.log(results);
        }
				assert.equal(results.violations.length, 0);
				assert.equal(results.violations[0].id, 'html-has-lang');
				assert.equal(results.passes.length, 1);
				done();
			});
	});
 });
