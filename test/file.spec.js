const {expect} = require('chai');

describe('First Test', () => {
	it('should verify 2 + 2', () => {
		expect(2 + 2).to.equal(4);
	});
});

describe('Second Test', () => {
	it('should verify 3 + 3', () => {
		expect(3+3).to.equal(6);
	});
});
