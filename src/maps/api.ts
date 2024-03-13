import { map, timer } from 'rxjs'

export type Item = {
    number: number
    name: string
}


const items: Item[] = [
    {
        number: 100,
        name: 'first',
    },
    {
        number: 200,
        name: 'second',
    },
    {
        number: 300,
        name: 'third',
    },
]


export const getFromID = (id: number) => {
    return timer(4000 * (2 - id)).pipe(map(() => items.at(id)))
}