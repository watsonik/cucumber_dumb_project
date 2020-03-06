const expect = require('chai').expect;
const {Given} = require('cucumber');
const PageFactory = require("../page_objects/pageFactory");
const State = require("../utils/state");
const getElement = require('../utils/elementHelper');
var {When} = require('cucumber');
const logger = require('../config/logger.config.js').logger;

Given(/^I open "([^"]*)" page$/, function (pageAlias) {
    logger.info(`I open ${pageAlias} page`);
    State.currentPage = pageAlias;
    logger.info(`Current page set to ${pageAlias}`);
    const page = PageFactory.getPage(pageAlias);
    return page.open();

    // return browser.get(url);
    // return expect('Western Digital Store').to.be.equal('Western Digital Store');
});
When(/^I click "([^"]*)"$/, function (elementAlias) {
    logger.info(`I click ${elementAlias} button`);
    // let currentPage = State.currentPage;
    let element = getElement(elementAlias);
    // element.click();
    // browser.sleep(3333);
    return element.click();
    // let pageTitle = await PageFactory.getPage(currentPage).getTitle();

});
When(/^I search "([^"]*)"$/, function (text) {
    logger.info(`I search ${text}`);
    let currentPage = State.currentPage;
    let po = PageFactory.getPage(currentPage);
    State.currentPage = "Search";
    return po.sendSearchRequest('Flash');

});
When(/^I select all brands products$/, async function () {
    logger.info(`I select all brands products`);
    let currentPage = State.currentPage;
    let po = PageFactory.getPage(currentPage);
    await po.Sidebar.shopButton.mouseOver();
    await po.Sidebar.allProductsButton.click();
    browser.sleep(10000);
    return State.currentPage = "PLP";
});
When(/^I choose Sort by Title desc$/, {timeout: 10 * 1000}, async function () {
    logger.info(`I choose Sort by Title desc`);
    let currentPage = State.currentPage;
    let po = PageFactory.getPage(currentPage);
    await po.titles.waitForPresence();
    return await po.chooseSortBy();

});
