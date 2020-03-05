const expect = require("chai").expect;
const PageFactory = require("../page_objects/pageFactory");

describe("Home page", function () {

    beforeEach(function () {
        browser.waitForAngularEnabled(true);
        return browser.manage().window().maximize();
    });

    xit('Home page should be opened', async function () {
        const homePage = PageFactory.getPage("Home");
        await homePage.open();
        const title = await homePage.getTitle();
        expect(title).to.be.equal('Western Digital Store');
    });

});
