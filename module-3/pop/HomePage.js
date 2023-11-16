/**
 * Create HomePage class representing the EPAM.com home page.
 * Add main widgets and element of the page and write tests
 * for it (test/pop/HomePage.spec.js).
 */
const Layout = require('./Layout');
const Element = require('./Element');
const Elements = require('./Elements');

module.exports = class HomePage extends Layout {
    constructor() {
        super('Home', 'http://epam.com', { css: '.body' });


        this.header = new Element('Header', { css: 'header' });
        this.logo = this.header.addChildren(new Element("Logo", { css: '.header__logo' }));
        this.hamburgerMenu = this.header.addChildren(new Element('Hamburger Menu', { css: '.hamburger-menu-ui.hamburger-menu-ui-23' }));

        this.main = new Element('Main', { id: 'main' });
        this.slider = this.main.addChildren(new Element('Slider', { css: '.top-.slider__slide' }));


        this.footerSection = new Element("Footer section", { css: '.footer section' });
        this.footerLinks = this.footerSection.addChildren(new Element("Footer links", { css: '.footer-links' }));
        this.copyright = this.footerSection.addChildren(new Element("Copyright", { css: '.copyright' }));
    }
}