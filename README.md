# kld-text-utils

A small collection of utilities for formatting text

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
