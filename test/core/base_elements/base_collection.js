const logger = require('../../config/logger.config').logger;
const EC = protractor.ExpectedConditions;

class Collection {
    constructor(elementName, selector) {
        this.collection = element.all(by.css(selector));
        this.elementName = elementName;
    };

    async getCount() {
        const collectionCount = await this.collection.count();
        logger.info(`Count of "${this.elementName}" is "${collectionCount}"`);
        return collectionCount;
    };

    async waitForPresence() {
        return browser.wait(EC.presenceOf(this.collection.first()), 10000);
    };
};

module.exports = Collection;
