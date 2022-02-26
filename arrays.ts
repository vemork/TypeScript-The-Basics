const arr: number[] = []
// const arr: Person[] = []

arr.push(1)
arr.push(true)
arr.push('string')

type MyList = [number?, string?, boolean?]
const arr2: MyList = []
arr2.push(1)
arr2.push(true)
arr2.push('string')