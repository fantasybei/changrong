const playwright = require('playwright');

(async () => {

	//login()
	makeOrder()

})();


async function makeOrder() {
	const browser = await playwright.chromium.launch({
		headless: false
	});

	const context = await browser.newContext({
		storageState: './auth.json'
	})

	const page = await context.newPage();
	await page.goto("https://booking.evaair.com/flyeva/eva/b2c/plan-your-journey/online-reservation/staralliance-award-ticket/select-itinerary.aspx?lang=sc-cn")
	await page.waitForTimeout(1000)
	//单程点击
	await page.click("#mainContent > main > div.content-form > div > div.form > div.margin-b-4 > div > div:nth-child(2) > label")
	await page.waitForTimeout(3000)
	//设置出发地点
	await page.fill('#content_DepNA', '')
	await page.waitForTimeout(1000)
	await page.type('#content_DepNA', 'seat')
	await page.waitForTimeout(2000)
	await page.click('#ui-id-1 > li.ui-menu-item')

	//设置目的地
	await page.type('#content_ArrNA', 'hkg')
	await page.waitForTimeout(2000)
	await page.click('#ui-id-3 > li.ui-menu-item')
	await page.waitForTimeout(1000)
	//设置舱等级
	//await page.click('#content_ddl_Cabin')
	await page.selectOption('#content_ddl_Cabin', 'I')
	await page.waitForTimeout(1000)
	//点击确认
	await page.click('#mainContent > main > div.content-form > div > div.form > div.form-btnBlock > button.btn.btn--lg.btn--green.js-Confirm')
	await page.waitForTimeout(2000)

	//选择航班确认
	await page.click('#content_div_Success > div > div > div.form-btnBlock > button.btn.btn--lg.btn--green.js-Confirm')
	await page.waitForTimeout(1000)
	await page.click('#modal > div > div.btnBlock > button.btn.btn--lg.btn--green.confirm-ok')
	await page.waitForTimeout(1000)
	//抵扣哩程确认
	await page.click('#content_btnConfirm')
	await page.waitForTimeout(1000)
	//旅客信息
	await page.type('#content_TxtMobileTelephoneNo', '18698502921')
	await page.waitForTimeout(1000)
	await page.click('#content_btn_Confirm')
	await page.waitForTimeout(1000)
	//确认
	//await page.locator('//*[@id="mainContent"]/main/div[3]/div[5]/div[2]/div[1]/label/span/text()[1]').click()
	await page.click('#mainContent > main > div.container-2.margin-x-auto.margin-b-2 > div.formBlock > div.form.form--large > div:nth-child(2)')
	await page.waitForTimeout(1000)
	await page.click('#mainContent > main > div.container-2.margin-x-auto.margin-b-2 > div.formBlock > div.form.form--large > div:nth-child(3) > label')
	await page.waitForTimeout(1000)
	//网络订位
	await page.waitForTimeout(2000)
	await page.click('#mainContent > main > div.container-2.margin-x-auto.margin-b-2 > div.btnBlock > button.btn.btn--lg.btn--green.js-Reservation')
	await page.waitForTimeout(2000)
	await page.click('#modal > div > div.btnBlock > button.btn.btn--lg.btn--green.confirm-ok')
	await page.waitForTimeout(2000)
	await page.click('#modal > div > div.btnBlock > button.btn.btn--lg.btn--green.confirm-ok')



	console.log('dddd222')
	await page.waitForTimeout(500000);
	await context.storageState({path: './auth.json'})
	context.close()
	await browser.close()
}


async function login() {
	const browser = await playwright.chromium.launch({
		headless: false
	});

	const context = await browser.newContext({
		storageState: './auth.json'
	})

	const page = await context.newPage();
	//await page.goto("https://booking.evaair.com/flyeva/eva/b2c/plan-your-journey/online-reservation/staralliance-award-ticket/select-itinerary.aspx?lang=sc-cn")
	await page.goto("https://www.evaair.com/sc-cn/index.html")
	await page.waitForTimeout(30000)
	//await page.click("body > header > div.header-main > nav > ul.toolbar-menu.toolbar-menu--member > li.toolbar-item.toolbar-item--login > a")
	console.log('dddd')
	await page.waitForTimeout(2000)
	//await page.type('#content_wuc_login_Account', '3340327970')
	//await page.waitForTimeout(2000)
	//await page.type('#content_wuc_login_Password', 'Zhn111333!')
	console.log('dddd222')
	await context.storageState({path: './auth.json'})
	await page.waitForTimeout(500000);
	context.close()
	await browser.close()

}