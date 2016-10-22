class SourcePrinter {
    constructor() {
        this.buffer = [];
        this.indent = "";
        this.indentText = "    ";
    }

    decreaseIndent() {
        this.indent = (this.indent.length >= this.indentText.length)
            ? this.indent.substring(0, this.indent.length - this.indentText.length)
            : this.indent;

        return this;
    }

    increaseIndent() {
        this.indent += this.indentText;

        return this;
    }

    print(text) {
        if (text !== undefined) {
            this.buffer.push(text);
        }

        return this;
    }

    printIndent() {
        return this.print(this.indent);
    }

    printWithIndent(text) {
        return this.printIndent().print(text);
    }

    println(text) {
        return this.print(text).print("\n");
    }

    printlnWithIndent(text) {
        return this.printIndent().println(text);
    }

    toString() {
        return this.buffer.join("");
    }
}

module.exports = SourcePrinter;
