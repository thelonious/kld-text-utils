let assert = require('assert'),
	SourcePrinter = require('../lib/SourcePrinter');

describe('SourcePrinter', function() {

	describe('default indent', function() {
		var printer = new SourcePrinter();

		it("should be empty", function() {
			assert.equal("", printer.indent);
		});
	});

	describe('default indent text', function() {
		var printer = new SourcePrinter();

		it("should be four spaces", function() {
			assert.equal("    ", printer.indentText);
		});
	});

	describe('increase indent', function() {
		var printer = new SourcePrinter();

		printer.increaseIndent();

		it("should be four spaces", function() {
			assert.equal("    ", printer.indent);
		});
	});

	describe('increase indent twice', function() {
		var printer = new SourcePrinter();

		printer.increaseIndent();
		printer.increaseIndent();

		it("should be eight spaces", function() {
			assert.equal("        ", printer.indent);
		});
	});

	describe('increase and decrease indent', function() {
		var printer = new SourcePrinter();

		printer.increaseIndent();
		printer.decreaseIndent();

		it("should be empty", function() {
			assert.equal("", printer.indent);
		});
	});

	describe('print indent without an indent', function() {
		var printer = new SourcePrinter();

		printer.printIndent();

		it("should be empty", function() {
			assert.equal("", printer.toString());
		});
	});

	describe('print with indent without an indent', function() {
		var printer = new SourcePrinter();

		printer.printWithIndent("test");

		it("should be 'test'", function() {
			assert.equal("test", printer.toString());
		});
	});

	describe('print with indent', function() {
		var printer = new SourcePrinter();

		printer.increaseIndent();
		printer.printWithIndent("test");

		it("should be '    test'", function() {
			assert.equal("    test", printer.toString());
		});
	});

	describe('print with newline', function() {
		var printer = new SourcePrinter();

		printer.println("test");

		it("should be 'test\\n'", function() {
			assert.equal("test\n", printer.toString());
		});
	});

	describe('println with indent', function() {
		var printer = new SourcePrinter();

		printer.increaseIndent();
		printer.printlnWithIndent("test");

		it("should be '    test\\n'", function() {
			assert.equal("    test\n", printer.toString());
		});
	});

});
