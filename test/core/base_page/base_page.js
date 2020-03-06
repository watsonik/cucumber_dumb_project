const logger = require('../../config/logger.config').logger;

class BasePage {

    open(url) {
        logger.info(`Opening "${url}" url`);
        return browser.get(url);
    };
    async getTitle() {
        return browser.getTitle();
    };
};

module.exports = BasePage;
