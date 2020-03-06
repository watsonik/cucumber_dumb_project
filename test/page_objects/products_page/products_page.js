const Collection = require("../../core/base_elements/base_collection");

class Products {
    constructor() {
        this.sortDropdown = element(by.model('sortBy'));
        this.byTitleDescOption = element(by.css('option[value="titleDesc"]'));
        this.titles = new Collection("Titles", ".md\\:font-bold");
    };

    async chooseSortBy() {
        await this.sortDropdown.click();
        return this.byTitleDescOption.click();
    };

    async getTitles() {
        const titles = this.getProducts().collection;
        return await titles.map(async function (el) {
            let title = await el.getText();
            return title;
        });
    }

    getProducts() {
        return new Collection("Titles", ".md\\:font-bold");
    }
};

module.exports = Products;
