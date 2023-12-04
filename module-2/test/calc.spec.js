const { it } = require('mocha');
const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test the calculator

    it('should return the initial value when no operations are performed', () => {
        expect(calc(3).v).to.equal(3);
    });

    describe("Addition", () => {
        it('should exist', () => {
            expect(calc(3).add).to.exist;
        });
        it('should correctly add two numbers', () => {
            expect(calc(3).add(5).v).to.equal(8);
        });
    });

    describe("Subtraction", () => {

        it('should exist', () => {
            expect(calc(3).minus).to.exist;
        });
        it('should correctly subtract one number from another', () => {
            expect(calc(3).minus(2).v).to.equal(1);
        });
    });

    describe("Square Root", () => {

        it('should exist', () => {
            expect(calc(4).sqrt).to.exist;
        });
        it('should correctly calculate the square root of a number', () => {
            expect(calc(4).sqrt().v).to.equal(2);
        });
        it('should throw an error when taking the square root of a negative number', () => {
            expect(() => calc(-3).sqrt()).to.throw('Square root of a negative value cannot be determined!');
        });
    });

    describe("Multiplication", () => {

        it('should exist', () => {
            expect(calc(3).times).to.exist;
        });
        it('should correctly multiply two numbers', () => {
            expect(calc(3).times(10).v).to.equal(30);
        });
    });

    describe("Division", () => {

        it('should exist', () => {
            expect(calc(10).divide).to.exist;
        });
        it('should correctly divide one number by another', () => {
            expect(calc(10).divide(2).v).to.equal(5);
        });
        it('should throw an error when dividing by zero', () => {
            expect(() => calc(5).divide(0)).to.throw('Division by 0 is not possible!');
        });
    });

    describe("Modulo", () => {

        it('should exist', () => {
            expect(calc(10).modulo).to.exist;
        });
        it('should correctly calculate the modulo of one number by another', () => {
            expect(calc(10).modulo(5).v).to.equal(0);
        });
    });

    describe("Chaining", () => {

        it('should correctly chain multiple operations', () => {
            expect(
                calc(3)
                    .add(4)
                    .minus(3)
                    .times(6).v
            ).to.equal(24);
        });
    });
});