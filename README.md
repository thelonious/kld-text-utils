# kld-text-utils

A small collection of utilities for formatting text. I use these in a number of other modules, so it's convenient to have these all in one place.

## format

This function allows you to add left and right padding and to format numbers as binary, hexadecimal, or decimals.

```
let format = require('kld-text-utils').format;

let h = format("{0:2x}", 106);

console.log(h);
# prints '6a'
```

## SourcePrinter

This class allows you to emit source code, making it easy to maintain and print indentation.

```
let SourcePrinter = require('kld-text-utils').SourcePrinter;

let printer = new SourcePrinter();

printer.println('class Hello {').increaseIndent();
printer.printlnWithIndent('say() {').increaseIndent();
printer.printlnWithIndent('console.log("hello")').decreaseIndent();
printer.printlnWithIndent('}').decreaseIndent();
printer.printlnWithIndent('}');
```

This would emit:

```
class Hello {
	say() {
		console.log("hello")
	}
}
```

## Table

This class allows you to format columns and rows of text (and numbers) into a table format.

```
var table = new Table();

table.headers = ["First", "Middle", "Last", "Age"];
table.addRow(["John", "William", "Dough", 48]);
table.addRow(["Susan", "Anita", "Bandita", 56]);
table.addRow(["Joe", "Ernest", "Cummings", 8]);

console.log(table.toString());
```

This would emit:

```
First Middle  Last     Age
===== ======= ======== ===
John  William Dough     48
Susan Anita   Bandita   56
Joe   Ernest  Cummings   8
```
