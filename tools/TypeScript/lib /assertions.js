"use strict";
exports.__esModule = true;
exports.createPoint = exports.len = void 0;
var input = ["Judy", "renad"];
exports.len = input.length;
function createPoint(long, lat) {
    if (long === void 0) { long = 0; }
    if (lat === void 0) { lat = 0; }
    return {
        long: long,
        lat: lat
    };
}
exports.createPoint = createPoint;
