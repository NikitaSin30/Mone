"use strict";
exports.__esModule = true;
var reportWebVitals = function (onPerfEntry) {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        Promise.resolve().then(function () { return require('web-vitals'); }).then(function (_a) {
            var getCLS = _a.getCLS, getFID = _a.getFID, getFCP = _a.getFCP, getLCP = _a.getLCP, getTTFB = _a.getTTFB;
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};
exports["default"] = reportWebVitals;
<<<<<<< HEAD



=======
>>>>>>> 64832354bd56bd6069b552b04e57aad0d33f65d7
