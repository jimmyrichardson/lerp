# Lerp JS

Some of my personal favorite linear interpolation helpers, borrowed from [Trys Mumford](https://www.trysmudford.com/blog/linear-interpolation-functions/).

## Installation

```
npm install @jimmyrichardson.co/lerp
```

## Usage

This package has 4 helpers:
1. __Lerp__: Returns any midpoint from any two numbers when specified between 0 and 1.
2. __Invlerp__: Returns *the* decimal midpoint from any two numbers, from 0 to 1.
3. __Clamp__: Adds a floor and a ceiling to your math for more predictable behavior.
4. __Range__: Returns any midpoint from any 2 sets of numbers, not just a decimal between 0 and 1. The midpoint argument comes from the first set of numbers.

### Lerp Example
```js
import { lerp } from '@jimmyrichardson.co/lerp';

console.log( lerp(0, 100, 0.5) ); // returns 50
```
### InvLerp Example
```js
import { invlerp } from '@jimmyrichardson.co/lerp';

console.log( invlerp(20, 100, 9999) ); // returns 1
```
### Clamp Example

```js
import { clamp } from '@jimmyrichardson.co/lerp';

console.log( clamp(9999, 20, 30) ); // returns 30
```
### Range Example

```js
import { range } from '@jimmyrichardson.co/lerp';

console.log( range(1, 10, 500, 5000, 5) ); // returns 2500
```