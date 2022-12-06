const cardanoScrapper = require('./cardano-scrapper');

async function scrapeAll(browserInstance){
	let browser;
	try{
		browser = await browserInstance;
		const scrapedData = {};
		scrapedData['DATA'] = await cardanoScrapper.scraper(browser);
		console.log('Console logueando desde el controller')
		return scrapedData
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = (browserInstance) => scrapeAll(browserInstance)