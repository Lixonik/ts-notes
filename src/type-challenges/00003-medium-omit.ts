/*
Implement the built-in Omit<T, K> generic without using it.

Constructs a type by picking all properties from T and then removing K

For example

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}
*/

type r = Omit<any, any>

type MyOmit<T, P extends keyof T> = Pick<T, Exclude<keyof T, P>>

interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
    completed: false,
}