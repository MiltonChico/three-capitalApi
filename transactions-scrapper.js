const scraperObject = {
	url: 'https://cardanoscan.io/transactions',
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);	

		const transactionsToReturn = await page.evaluate(() => {
			return Array.from(document.querySelectorAll('body > div > div > div > div > div.overflow-auto.customScrollBar > table > tbody > tr')).map(el => {

				const hash = el.querySelector('body > div > div > div > div > div.overflow-auto.customScrollBar > table > tbody > tr > td > div.flex.flex-col.space-y-2 > a.font-mono.link') ? el.querySelector('body > div > div > div > div > div.overflow-auto.customScrollBar > table > tbody > tr > td > div.flex.flex-col.space-y-2 > a.font-mono.link').innerText : "";
			
					// const inputs = e.querySelector('body > div > div > div > div > div.overflow-auto.customScrollBar > table > tbody > tr > td> div > a > span')

				const outputs = el.querySelector('body > div > div > div > div > div.overflow-auto.customScrollBar > table > tbody > tr > td > div > a > span') ? el.querySelector('body > div > div > div > div > div.overflow-auto.customScrollBar > table > tbody > tr > td > div > a > span').innerText : ""

				toReturn = {
					hash: hash,
					outputs: outputs,
				}

				return toReturn
			})
		})
		console.log(transactionsToReturn)
		
}

}

module.exports = scraperObject;
