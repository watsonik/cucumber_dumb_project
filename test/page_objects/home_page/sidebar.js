const Element = require("../../core/base_elements/base_element");

class Sidebar {
    constructor() {
        this.shopButton = new Element('"Shop" button', '#productStore');
        this.allProductsButton = new Element('"All products" button', '#store_all_nav a[href="/c/all-products"]');
    };
}

module.exports = Sidebar;
