const expect = require("chai").expect;
const PageFactory = require("../page_objects/pageFactory");

describe("Search page", function () {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        return browser.manage().window().maximize();
    });

    it('Positive: Search should provide results', async function () {
        const homePage = PageFactory.getPage("Home");
        await homePage.open();
        await homePage.clickSearchButton();
        homePage.sendSearchRequest('Flash');
        const searchPage = PageFactory.getPage("Search");
        await searchPage.resultsCarousel.waitForPresence();
        const resultsCount = await searchPage.resultsCarousel.getCount();
        expect(resultsCount, 'Nothing found').to.be.at.least(1);
    });

});
