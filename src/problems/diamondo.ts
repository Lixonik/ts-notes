import { BehaviorSubject, combineLatest, combineLatestAll, map } from 'rxjs'


const m1 = new BehaviorSubject(1)
const m2 = new BehaviorSubject(1)

const r = combineLatest([m1, m2]).pipe(
    map(([m1, m2]) => m1 * m2),
)

//r.subscribe(console.log)

const setMult = (v1: number, v2: number) => {
    m1.next(v1)
    m2.next(v2)
}

setMult(2, 3)

const myObject = {
    name: 'Heisenberg',
    sayMyName: () => '',

    setMyName: function () {
        this.sayMyName = () => {
            return `My name is ${this.name}`
        }
    },
}

myObject.setMyName()

console.log(myObject.sayMyName())
