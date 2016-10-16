let assert = require('assert'),
	Table = require('../lib/Table');

describe('Table', function() {

	describe('toString', function() {
		var expected = [
			"First Middle  Last     Age",
			"===== ======= ======== ===",
			"John  William Dough     48",
			"Susan Anita   Bandita   56",
			"Joe   Ernest  Cummings   8"
		].join("\n");

		var table = new Table();

		table.headers = ["First", "Middle", "Last", "Age"];
		table.addRow(["John", "William", "Dough", 48]);
		table.addRow(["Susan", "Anita", "Bandita", 56]);
		table.addRow(["Joe", "Ernest", "Cummings", 8]);

		it("should look like", function() {
			assert.equal(expected, table.toString());
		});
	});

});
