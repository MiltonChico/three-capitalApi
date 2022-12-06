const scraperObject = {

	url: 'https://cardanoscan.io/token/c057026ba663f8dfe192b06971c878d3bd9f046f?tab=topholders',
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);	

		let dataToReturn
		
		dataToReturn = await page.evaluate(() => {
			return Array.from(document.querySelectorAll('body > div > div > div')).map(el => {

				const totalSupply = el.querySelector('body > div > div > div > div.card.flex.flex-col > div > div > div.flex.flex-col.px-4.py-1.divide-y.divideColor.divide-dashed > div > div > span') ? el.querySelector('body > div > div > div > div.card.flex.flex-col > div > div > div.flex.flex-col.px-4.py-1.divide-y.divideColor.divide-dashed > div > div > span').innerText : "";

				const totalHolders = el.querySelectorAll('#topholders > div > table > tbody > tr ')

				toReturn = {
					totalSupply: totalSupply,
					totalHolders: totalHolders.length
				}

				return toReturn
			})
		})
		return dataToReturn
	}
}

module.exports = scraperObject;
