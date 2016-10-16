let assert = require('assert'),
	format = require('../index.js').format;

describe('format', function() {

	describe('no format', function() {
		var result = format("test", 0);

		it("should be 'test'", function() {
			assert.equal("test", result);
		});
	});

	describe('binary format', function() {
		var result = format("{0:b}", 100);

		it("should be '1100100'", function() {
			assert.equal("1100100", result);
		});
	});

	describe('hex format, lowercase', function() {
		var result = format("{0:x}", 106);

		it("should be '6a'", function() {
			assert.equal("6a", result);
		});
	});

	describe('hex format, lowercase', function() {
		var result = format("{0:X}", 106);

		it("should be '6A'", function() {
			assert.equal("6A", result);
		});
	});

	describe('pad right', function() {
		var result = format("{0:s10}", "test");

		it("should be 'test      '", function() {
			assert.equal("test      ", result);
		});
	});

	describe('pad left', function() {
		var result = format("{0:s-10}", "test");

		it("should be '      test'", function() {
			assert.equal("      test", result);
		});
	});

});
