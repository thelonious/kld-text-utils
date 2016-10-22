let assert = require('assert'),
    Table = require('../lib/Table');

describe('Table', function() {

    describe('toString with headers', function() {
        var expected = [
            "First Middle  Last     Age",
            "===== ======= ======== ===",
            "John  William Dough     48",
            "Susan Anita   Bandita   56",
            "Joe   Ernest  Cummings   8"
        ].join("\n");

        var table = new Table(["First", "Middle", "Last", "Age"]);

        table.addRow(["John", "William", "Dough", 48]);
        table.addRow(["Susan", "Anita", "Bandita", 56]);
        table.addRow(["Joe", "Ernest", "Cummings", 8]);

        it("should look like", function() {
            assert.equal(expected, table.toString());
        });
    });

    describe('toString without headers', function() {
        var expected = [
            "John  William Dough    48",
            "Susan Anita   Bandita  56",
            "Joe   Ernest  Cummings  8"
        ].join("\n");

        var table = new Table(["First", "Middle", "Last", "Age"]);

        table.showHeaders = false;
        table.addRow(["John", "William", "Dough", 48]);
        table.addRow(["Susan", "Anita", "Bandita", 56]);
        table.addRow(["Joe", "Ernest", "Cummings", 8]);

        it("should look like", function() {
            assert.equal(expected, table.toString());
        });
    });

    describe('toString with custom divider', function() {
        var expected = [
            "First Middle  Last     Age",
            "----- ------- -------- ---",
            "John  William Dough     48",
            "Susan Anita   Bandita   56",
            "Joe   Ernest  Cummings   8"
        ].join("\n");

        var table = new Table(["First", "Middle", "Last", "Age"]);

        table.divider = "-";
        table.addRow(["John", "William", "Dough", 48]);
        table.addRow(["Susan", "Anita", "Bandita", 56]);
        table.addRow(["Joe", "Ernest", "Cummings", 8]);

        it("should look like", function() {
            assert.equal(expected, table.toString());
        });
    });

});
