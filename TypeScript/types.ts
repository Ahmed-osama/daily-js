export interface Person {
    name: string,
    age: number,
    children: string[],
    job: any,
    walk: () => number
}

export enum Color { red, green, blue }