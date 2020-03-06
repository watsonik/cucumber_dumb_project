const PageFactory = require("../page_objects/pageFactory");
const State = require("../utils/state");

function getElement(element) {
    let currentPage = State.currentPage;
    let po = PageFactory.getPage(currentPage);
    for (const field in po) {
        if (po.hasOwnProperty(field)) {
            if (po[field].elementName) {
                if (po[field].elementName === element) {
                    return po[field];
                }
            }
        }
    }
}

module.exports = getElement;
