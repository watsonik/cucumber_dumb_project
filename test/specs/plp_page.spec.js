const expect = require("chai").expect;
const {sortStringDesc} = require('../utils/sortUtils');
const PageFactory = require("../page_objects/pageFactory");

describe("Product list page", function () {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        return browser.manage().window().maximize();
    });

    xit('Products list page should be sorted by Title Z-A', async function () {
        const homePage = PageFactory.getPage("Home");
        await homePage.open();

        await homePage.Sidebar.shopButton.mouseOver();
        await homePage.Sidebar.allProductsButton.click();

        const plp = PageFactory.getPage("PLP");
        await plp.titles.waitForPresence();
        await plp.chooseSortBy();
        browser.sleep(10_000); //todo implement EC
        const titles = await plp.getTitles();
        let [...sortedTitlesDesc] = titles;
        sortedTitlesDesc.sort(sortStringDesc);

        expect(titles).to.have.ordered.members(sortedTitlesDesc);
    });

});
