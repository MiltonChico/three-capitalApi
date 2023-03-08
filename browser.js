const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

async function startBrowser(){
	let browser;
	try {
	    console.log("Opening the browser......");
	    browser = await puppeteer.launch({
	        headless: true,
			executablePath: process.env.CHROME_EXECUTABLE_PATH || await chromium.executablePath,
	        args: ['--no-sandbox',"--disable-setuid-sandbox"],
	        'ignoreHTTPSErrors': true
	    });

	} catch (err) {
		console.log("Could not create a browser instance => : ", err);
	}

	return browser
}

module.exports = {
	startBrowser
};