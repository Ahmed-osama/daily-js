let input: string[] = ['Judy', 'renad']
export let len: number = (input as string[]).length
// export let len2: number = (<Array<string>>input).length
// export let len3: number = (<string[]>input).length
// export let len4: number = (input as string[]).length
interface Pos {
    long: number,
    lat: number
}
export function createPoint(long: number = 0, lat: number = 0): Pos {
    return {
        long,
        lat
    }
}