// Оператор mergeMap, получив следующий эмит, подпишется на новый поток (Observable),
// не отписываясь от предыдущего. Каждый из них выполниться в рандомном порядке.
// То есть, в данном случае, мы получим 4 независимых потока, которые выполнятся в любом порядке, независимо от времени ответа от сервера

import { mergeMap, of, tap } from 'rxjs'
import { getFromID } from './api.ts'

of(0, 1, 2).pipe(
    mergeMap((id) => {

        return getFromID(id)
    }, 1),
    tap(result => console.log(result)),
).subscribe()

// mergeMap может принять второй параметр concurrent
// concurrent ограничивает количество параллельно выполняющихся потоков