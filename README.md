# REvent

## Description

An utility lib to convert a list of consecutive dates to events

### Usage

``` javascript
var revent = require('revent').REvent; // in Node.js
// .., in the browser copy directly the revent.js and use `revent( dateSequence ).toEvents()` 

var dateSequence = [
  new Date("1990-11-30"), new Date("1990-12-1"), new Date("1990-12-2"),
  new Date("1990-12-4"),
  new Date("1990-12-7")
]

var events = JSON.stringify( revent(dateSequence).toEvents() );
console.log(events);

/*
[
  {date_start: new Date("1990-11-30"), date_end: new Date("1990-12-2")},
  {date_start: new Date("1990-12-4"), date_end: new Date("1990-12-4")},
  {date_start: new Date("1990-12-7"), date_end: new Date("1990-12-7")}
]
*/



```

### Installation

```
$ npm install revent
```

### Run the tests

``` shell
✱  mocha --ignore-leaks

  ․․․․․

  ✔ 5 tests complete (12ms)
```