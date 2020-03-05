const logger = require('../../config/logger.config');
class Element {
    constructor(elementName, selector) {
        this.element = element(by.css(selector));
        this.elementName = elementName;
    }
    click() {
        logger.info(`Clicking "${this.elementName}"`);
        return this.element.click();
    };

    sendKeys(text) {
        logger.info(`Type "${text}" into "${this.elementName}"`);
        return this.element.sendKeys(text);
    };
    async getText() {
        const elementText = await this.element.getText();
        logger.info(`"${this.elementName}" element text is ${elementText}`);
        return elementText;
    };

    async mouseOver() {
        return browser.actions().mouseMove(this.element).perform();
    };
};

module.exports = Element;
