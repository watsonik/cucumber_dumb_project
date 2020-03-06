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
});

When(/^I click "([^"]*)"$/, function (elementAlias) {
    logger.info(`I click ${elementAlias} button`);
    let element = getElement(elementAlias);
    return element.click();

});

When(/^I search "([^"]*)"$/, {timeout: 10 * 1000}, function (text) {
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
