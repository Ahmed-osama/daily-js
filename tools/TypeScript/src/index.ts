import { Color, Person } from "./types";
import { createPoint, len } from "./assertions";

import { add } from "./declarations";

// Types
const ahmed: Person = {
  name: "ahmed",
  age: 28,
  walk: () => 2,
  children: ["Hmaza"],
};

let red: Color = Color.red;

// Declarations
let addOutput = add(5, 6);
//assertions
let mapPoint = createPoint(25, 43);
console.log(mapPoint);
