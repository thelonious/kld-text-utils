let utils = require('./Functions');

class Table {
    constructor(headers) {
        this.headers = (headers === undefined) ? [] : headers;
        this.rows = [];
        this.showHeaders = true;
        this.divider = "=";
    }

    addRow(items) {
        this.rows.push(items);
    }

    get columnCount() {
        let headerCount = this.headers.length;
        let rowColumnCount = Math.max.apply(Math, this.rows.map(row => row.length));

        return Math.max(headerCount, rowColumnCount);
    }

    get columnLengths() {
        var columns = [];
        var columnCount = this.columnCount;

        // get the maximum length for each column
        for (var i = 0; i < columnCount; i++) {
            if (this.showHeaders) {
                columns.push(this.getColumnWithHeader(i));
            }
            else {
                columns.push(this.getColumn(i));
            }
        }

        return columns.map(column => Math.max.apply(Math, column.map(item => String(item).length)));
    }

    getColumn(index) {
        return this.rows.map(row => {
            if (0 <= index && index < row.length) {
                return row[index];
            }
            else {
                return "";
            }
        });
    }

    getColumnWithHeader(index) {
        var header = this.getHeader(index);
        var column = this.getColumn(index);

        column.unshift(header);

        return column;
    }

    getHeader(index) {
        return (0 <= index && index < this.headers.length) ? this.headers[index] : "";
    }

    toString() {
        var buffer = [];
        var columnCount = this.columnCount;
        var lengths = this.columnLengths;

        if (this.showHeaders) {
            // emit headers and dividers
            var headers = [];
            var dividers = [];

            for (var i = 0; i < columnCount; i++) {
                var header = this.getHeader(i);
                var length = lengths[i];
                var format = "{0:s" + length + "}";

                headers.push(utils.format(format, header));
                dividers.push(utils.repeat(this.divider, length));
            }

            buffer.push(headers.join(" "));
            buffer.push(dividers.join(" "));
        }

        // emit rows
        this.rows.forEach(row => {
            var rowBuffer = [];

            for (var j = 0; j < columnCount; j++) {
                var item = (j < row.length) ? row[j] : "";
                var length = typeof(item) === "number" ? -lengths[j] : lengths[j];
                var format = "{0:s" + length + "}";

                rowBuffer.push(utils.format(format, String(item)));
            }

            buffer.push(rowBuffer.join(" "));
        });

        return buffer.join("\n");
    }
}

module.exports = Table;
