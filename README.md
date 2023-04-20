<!-- [![codecov](https://codecov.io/gh/rimara14/optional-chaining/branch/master/graph/badge.svg?token=7PGMPH66IV)](https://codecov.io/gh/rimara14/optional-chaining) -->

## Introduction
***Optional Chaining** functionality for vanilla javascript* 
Prevent error 'Cannot read property of undefined' or 'Cannot read property of null'.

Handle null or undefined parent property when accessing child properties in an object.

## Installation
```bash
npm install optional-chaining-js --save
```

## Usage
```ts
import { optionalChaining } from 'optional-chaining-js';

// Prevent error 'Cannot read property of null'
// by handling null/undefined parent properties
let customer = { info: null };
optionalChaining(customer, 'info.address.city'); // undefined

let customer = { info: { address: undefined } };
optionalChaining(customer, 'info.address.city'); // undefined


let customer = {
    info: {
        name: 'John Doe',
        address: {
            country: 'Indonesia',
            province: 'DKI Jakarta',
            city: 'Jakarta'
        }
    }
};
optionalChaining(customer, 'info.address.city'); // Jakarta
```
