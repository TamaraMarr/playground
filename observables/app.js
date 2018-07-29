'use strict';

var _rxjs = require('rxjs');

var observable = new _rxjs.Observable(function (observer) {
    var interval = setInterval(function () {
        observer.next('Hello');
    }, 1000);

    return function () {
        clearInterval(interval);
    };
});

observable.subscribe(function (value) {
    return console.log(value);
});
