
const expect = require('chai').expect;
const { describe, beforeEach } = require('mocha');
const HomePage = require('../../pop/HomePage.js');
const homePage = new HomePage();

describe('HomePage Class', () => {

    beforeEach(() => {
        homePage.load();
    });

    afterEach(() => {
        delete homePage;
    });

    it('should be defined', () => {
        expect(HomePage).to.be.instanceOf(Function);
    });
});

describe('Header Section', () => {

    it('should be defined', () => {
        expect(homePage.header).to.be.an('object');
    })

    it('should have set Logo as a child', () => {
        const isThisLogo = Object.keys(homePage.header.children)[0];
        expect(homePage.header.children[isThisLogo].name).to.equal('Logo');
    })

    it('should have set Hamburger Menu as a child', () => {
        const isThisHamburgerMenu = Object.keys(homePage.header.children)[1];
        expect(homePage.header.children[isThisHamburgerMenu].name).to.equal('Hamburger Menu');
    })
});

describe('Main Section', () => {

    it('should be defined', () => {
        expect(homePage.main).to.be.an('object');
    })

    it('should have set Slider as a child', () => {
        const isThisSlider = Object.keys(homePage.main.children)[0];
        expect(homePage.main.children[isThisSlider].name).to.equal('Slider');
    })

})

describe('Footer Section', () => {

    it('should be defined', () => {
        expect(homePage.footerSection).to.be.an('object');
    })

    it('should have set Footer links as a child', () => {
        const isThisFooterLinks = Object.keys(homePage.footerSection.children)[0];
        expect(homePage.footerSection.children[isThisFooterLinks].name).to.equal('Footer links');
    })

    it('should have set Copyright as a child', () => {
        const isThisCopyright = Object.keys(homePage.footerSection.children)[1];
        expect(homePage.footerSection.children[isThisCopyright].name).to.equal('Copyright');
    })
});