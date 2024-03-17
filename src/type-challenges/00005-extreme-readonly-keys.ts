/*
Implement a generic GetReadonlyKeys<T> that returns a union of the readonly keys of an Object.

For example

interface Todo {
  readonly title: string
  readonly description: string
  completed: boolean
}

type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
 */

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;



type GetReadonlyKeys<
    T,
    U extends Readonly<T> = Readonly<T>,
    K extends keyof T = keyof T
> = K extends keyof T ? Equal<Pick<T, K>, Pick<U, K>> extends true ? K : never : never;


interface Todo {
    readonly title: string
    readonly description: string
    completed: boolean
}

type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"

//const a: Keys = 'completed'
const b: Keys = 'title'
const c: Keys = 'description'
