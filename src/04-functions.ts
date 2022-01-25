function add(n1: number, n2: number) {
    return n1 + n2
}

function printResult(num: number) {
    console.log('Result is: ' + num)
}

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2
    callback(result)
}

let combineValues: (a: number, b: number) => number
combineValues = add

printResult(combineValues(1, 2))

addAndHandle(10, 20, (result) => {
    console.log(result)
})