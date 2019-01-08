import { Person, Color } from './types';
import { add } from './declarations';

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

