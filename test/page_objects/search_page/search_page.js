const Collection = require("../../core/base_elements/base_collection");

class Search {
    constructor() {
        this.resultsCarousel = new Collection("Result carousel", ".slick-slide");
    };
};

module.exports = Search;
