# preffered-numbers
Preffered numbers acc. to ISO 3 / ГОСТ 8032.

Example:
```js
import * as prefferedNumbers from '@smirnovvdonsk/polynome'

let initial = 4.698

console.log(prefferedNumbers.nextR40(initial)) // 4.75
console.log(prefferedNumbers.prevR40(initial)) // 4.5
console.log(prefferedNumbers.nearR40(initial)) // 4.75
console.log(prefferedNumbers.nextR80(initial)) // 4.75
console.log(prefferedNumbers.prevR80(initial)) // 4.62
console.log(prefferedNumbers.nearR80(initial)) // 4.75
console.log(prefferedNumbers.nextR160(initial)) // 4.75
console.log(prefferedNumbers.prevR160(initial)) // 4.685
console.log(prefferedNumbers.nearR160(initial)) // 4.685

initial = -143.37

console.log(prefferedNumbers.nextR40(initial)) // -140
console.log(prefferedNumbers.prevR40(initial)) // -150
console.log(prefferedNumbers.nearR40(initial)) // -140
console.log(prefferedNumbers.nextR80(initial)) // -140
console.log(prefferedNumbers.prevR80(initial)) // -145
console.log(prefferedNumbers.nearR80(initial)) // -145
console.log(prefferedNumbers.nextR160(initial)) // -142.5
console.log(prefferedNumbers.prevR160(initial)) // -145
console.log(prefferedNumbers.nearR160(initial)) // -142.5
```
