export interface Person {
    name: string,
    readonly age: number,
    children: string[],
    job?: any,
    walk: () => number
}

export enum Color { red, green, blue }