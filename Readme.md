# 🔢😊 Formel

⚡️ **Simply and lightweight JavaScript library for the browser and for Node.js that provides extra String methods.**

[![](https://data.jsdelivr.com/v1/package/npm/formel/badge)](https://www.jsdelivr.com/package/npm/formel) ![badgen](https://badgen.net/bundlephobia/min/formel) ![badgen](https://badgen.net/bundlephobia/minzip/formel)

## Usage

```js
import formel from "formel";
or;
var formel = require("formel");
```

Or include it via jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/formel@1.0.5/build/index.min.js"></script>
```
### Example
```js
formel(string) // constructor
.capitalize() // method
.val // get value

// chaining methods
formel("  hello   world  ")
.compact()
.capitalize()
.val // Hello world
```
## Methods & Examples

### - rmTags() : String ###

remove all html tags from a string
```js
formel("<script>hello world</script> fine<br />").rmTags().val // hello world fine
```

### - rmSpaces() : String ###
remove all spaces from a string
```js
formel("  hello   world  ").rmSpaces().val // helloworld
```

### - compact() : String ###
remove all extra spaces from a string
```js
formel("  hello   world  ").compact().val // hello world
```

### - capitalize() : String ###

```js
formel("hello world").capitalize().val // Hello world
```

### - revstr() : String ###
reverse a string
```js
formel("welcome").revstr().val // emoclew
```
### - splitInto([spread], [seprator]) : String ###

```js
formel("12456789").splitInto().val // 123 456 789
formel("hello").splitInto(2, "-").val // he-ll-o
formel("welcome 2019").splitInto(4).val // we lc om e  20 19
```

## Notes
- Run both in a browser and in Node.js.

## License
MIT