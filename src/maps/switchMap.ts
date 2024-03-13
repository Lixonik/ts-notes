import { of, switchMap, tap } from 'rxjs'
import { getFromID } from './api.ts'


// Оператор switchMap, получая новое значение, подписывается на новый поток (Observable), тут же отписавшись от предыдущего
of(0, 1, 2).pipe(
    switchMap((id) => {

        return getFromID(id)
    }),
    tap(result => console.log(result)),
).subscribe()

