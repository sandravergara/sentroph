const { setDefaultTimeout, AfterAll, Before, After, BeforeAll } = require('cucumber');
const { createSession, closeSession, startWebDriver, stopWebDriver, getNewScreenshots } = require('nightwatch-api');
const fs = require('fs');
const reporter = require('cucumber-html-reporter')

setDefaultTimeout(60000);

BeforeAll(async function() {
  await startWebDriver();
});

Before (async function() {
	let option = {}
	option.env = this.parameters.env ? this.parameters.env : 'default';

	await createSession(option);
});

After (async function() {
	await closeSession();
});

After (function() {
	getNewScreenshots().forEach(file => {
		this.attach(fs.readFileSync(file), 'image/png')
	});
})

AfterAll(async function() {
  await stopWebDriver();
  setTimeout(() => {
	  reporter.generate({
        theme: 'hierarchy',
        jsonFile: './reports/cucumber_report.json',
        output: './reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
		launchReport: true,
		metadata: {
			Environment: process.env.TEST_ENV || 'development'
		}
	})
  }, 1000)
});

