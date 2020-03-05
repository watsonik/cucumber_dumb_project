const expect = require('chai').expect;
const {Given} = require('cucumber');
const logger = require('../config/logger.config.js').logger;

Given(/^I open "([^"]*)" page$/, function (url) {
    logger.info(`I AAAopen ${url} url`);
    return browser.get(url);
    // return expect('Western Digital Store').to.be.equal('Western Digital Store');
});
