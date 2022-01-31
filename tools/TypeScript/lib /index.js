"use strict";
exports.__esModule = true;
var types_1 = require("./types");
var assertions_1 = require("./assertions");
var declarations_1 = require("./declarations");
// Types
var ahmed = {
    name: "ahmed",
    age: 28,
    walk: function () { return 2; },
    children: ["Hmaza"]
};
var red = types_1.Color.red;
// Declarations
var addOutput = (0, declarations_1.add)(5, 6);
//assertions
var mapPoint = (0, assertions_1.createPoint)(25, 43);
console.log(mapPoint);
