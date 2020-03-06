let {Then, When, Given} = require('cucumber');
const expect = require('chai').expect;
const State = require("../utils/state");
const PageFactory = require("../page_objects/pageFactory");
const {sortStringDesc} = require('../utils/sortUtils');
const logger = require('../config/logger.config.js').logger;

Then(/^Page title should( not)? be "([^"]*)"$/, async (notArg, text) => {
    notArg = notArg ? ' not' : '';
    // let currentPage = State.getCurrentPage();
    // let pageTitle = await PageFactory.getPage(currentPage).getTitle();
    let pageTitle = await browser.getTitle();
    logger.info(`Page title should${notArg} be ${text}`);
    if (notArg) {
        return expect(pageTitle).to.not.equal(text);
    } else {
        return expect(pageTitle).to.be.equal(text);
    }
});
Then(/^I get search result$/, async function () {
    let currentPage = State.currentPage;
    const po = PageFactory.getPage(currentPage);
    await po.resultsCarousel.waitForPresence();
    const resultsCount = await po.resultsCarousel.getCount();
    expect(resultsCount, 'Nothing found').to.be.at.least(1);
});
Then(/^Product list should be sorted$/, {timeout: 20 * 1000}, async function () {
    browser.sleep(10000); //todo implement EC
    let currentPage = State.currentPage;
    const po = PageFactory.getPage(currentPage);
    const titles = await po.getTitles();
    let [...sortedTitlesDesc] = titles;
    sortedTitlesDesc.sort(sortStringDesc);

    expect(titles).to.have.ordered.members(sortedTitlesDesc);
});
