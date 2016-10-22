# kld-text-utils

A small collection of utilities for formatting text. I use these in a number of other modules, so it's convenient to have these all in one place.

## format

This function allows you to add left and right padding and to format numbers as binary, hexadecimal, or decimals.

```
let format = require('kld-text-utils').format;

let h = format("{0:x2}", 106);

console.log(h);
# prints '6a'
```

Each format expression, surrounded by curly braces, consists of three parts:

1. The argument index
2. The format type
3. The field width

The first argument after the format string is argument 0 and each argument thereafter increases by one. By using an argument index in your format, you can refer to the same argument in multiple places within the string.

```
console.log(format("{0} = ${0:X2}", 104));

# prints '104 = $68'
```

The format type indicates

| Format | Description                                                            |
|--------|------------------------------------------------------------------------|
| b      | print argument in binary. Leading zeros will be used to fill the width |
| s      | print argument as a string. The column will be filled with spaces      |
| x      | print argument as hex. Lowercase letters will be used for a-f values   |
| X      | print argument as hex. Uppercase letters will be used for A-F values   |

## repeat

The repeat function creates a string by repeating a specified string a specified number of times.

```
repeat('abc', 3);

# results in 'abcabcabc'
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
var table = new Table(["First", "Middle", "Last", "Age"]);

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

Headers can be turned off by setting the boolean property `showHeaders`.

The divider character can be changed by setting the `divider` property.
