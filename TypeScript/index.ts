import { Person, Color } from './types';
import { add } from './declarations';
import { len, createPoint } from './assertions';


// Types
const ahmed: Person = {
    name: "ahmed",
    age: 28,
    walk: () => 2,
    children: ["Hmaza"],
    job: 'Frontender'
}
let red: Color = Color.red

// Declarations
let addOutput = add(5, 6)
//assertions 
let mapPoint = createPoint(25, 43)
console.log(mapPoint)


