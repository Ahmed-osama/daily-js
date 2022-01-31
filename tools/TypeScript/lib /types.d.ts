export interface Person {
    name: string;
    readonly age: number;
    children: string[];
    job?: any;
    walk: () => number;
}
export declare enum Color {
    red = 0,
    green = 1,
    blue = 2
}
