let currentPage;

class State {

    static get currentPage() {
        return currentPage;
    };

    static set currentPage(page) {
        currentPage = page;
    };

// TODO discuss

    // static currentPage;
    //
    // static getCurrentPage() {
    //     return this.currentPage;
    // };
    //
    // static setCurrentPage(page) {
    //     this.currentPage = page;
    // };
};

module.exports = State;
