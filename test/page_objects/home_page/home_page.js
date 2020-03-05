const BasePage = require("../../core/base_page/base_page");
const SearchPage = require("../search_page/search_page");
const Sidebar = require("./sidebar")
const Element = require("../../core/base_elements/base_element");

class HomePage extends BasePage {
    constructor() {
        super();
        this.Sidebar = new Sidebar();
        this.url = "https://shop.westerndigital.com";
        this.searchButton = new Element("Search Button", ".searchbutton");
        this.searchInput = new Element("Search Input", "#searchright");
    };

    open() {
        return super.open(this.url);
    };

    async clickSearchButton() {
        return this.searchButton.click();
    };

    sendSearchRequest(text) {
    // async sendSearchRequest(text) {
        return this.searchInput.sendKeys(text).submit();
    };
};

module.exports = HomePage;
