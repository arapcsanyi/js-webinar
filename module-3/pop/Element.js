'use strict';

const { element } = require("../test/mock/ElementFinder");

/**
 * Create an Element class that represents an element of
 * the application, and
 *
 * 1. It has a protractor locator (.locator),
 *    e.g. by.css("h1.title")
 * 2. It has a name (.name), e.g. "Document Title"
 * 3. It can have a parent Element,
 *    which is the context of the element (.parent)
 * 4. It can have children Elements (.children)
 * 5. It has a method to retrieve the protractor element
 *    by the locator (.get([name])) in it's context
 *     - if it gets a name as parameter, it tries to find
 *       in it's children (recursively) the Element with
 *       the given name or throws an Erorr if it cannot
 *       find the element
 *
 * Use Protractor API to retrieve element
 * @see {@link https://www.protractortest.org/#/api?view=ElementFinder}
 */

class Element {
    constructor(name, locator) {
        this.name = name;
        this.locator = locator;
        this.parent = null;
        this.children = {};
    }
    setParent(parent) {
        this.parent = parent;
    }

    addChildren(child) {
        if (this.children[child.name]) {
            throw new Error('Child already exists');
        }
        this.children[child.name] = child;
        return child.setParent(this);
    }

    get(name) {
        const e = name === undefined ? this.getRoot() : this.findElement(this.getRoot(), name);
        return element(e.locator);
    }

    getRoot() {
        if (this.parent) {
            return this.parent.getRoot();
        }
        return this;
    }

    // Find child element recursively by name
    findElement(element, name) {
        if (element.name === name) {
            return element;
        }
        if (element.children) {
            for (const child of Object.values(element.children)) {
                const found = this.findElement(child, name);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    }

}

module.exports = Element;