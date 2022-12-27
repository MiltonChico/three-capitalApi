const cardanoScrapper = require('./scrapper');

async function scrapeAll(browserInstance){
	let browser;
	try{
		browser = await browserInstance;
		const data = await cardanoScrapper.scraper(browser);
		console.log('Console logueando desde el controller')
		console.log(data)
		return data
	}
	catch(err){
		console.log("Could not resolve he browser instance => ", err);
	}
}

module.exports = (browserInstance) => scrapeAll(browserInstance)