const logger = require('../../config/logger.config').logger;
const Header = require('./header');

class BasePage {
    constructor() {
        this.Header = new Header();
    };
    wait(waitInMilliseconds) {
        logger.info(`Waiting "${waitInMilliseconds}" milliseconds`);
        return browser.sleep(waitInMilliseconds);
    };
    async getCurrenUrl() {
        const currentUrl = browser.getCurrentUrl();
        logger.debug(`Current url is "${currentUrl}"`)
        return currentUrl;
    };
    open(url) {
        logger.info(`Opening "${url}" url`);
        return browser.get(url);
    };
    async getTitle() {
        return browser.getTitle();
    };
};

module.exports = BasePage;
