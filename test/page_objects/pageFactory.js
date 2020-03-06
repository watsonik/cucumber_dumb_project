const HomePage = require("./home_page/home_page");
const PLP = require("./products_page/products_page");
const BasePage = require("../core/base_page/base_page");
const SearchPage = require("./search_page/search_page");

class PageFactory {

    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();
            case "PLP":
                return new PLP();
            case "Search":
                return new SearchPage();
            default:
                return new BasePage();
        }
    };
};

module.exports = PageFactory;
