interface Person {
  first: string,
  last: string,
  [key: string]: any // carefull
}

const person: Person = {
  "first": 'David',
  "last": 'Wallace'
}

const person2: Person = {
  "first": 'Geralt',
  "last": 'the witcher',
  "fast": true
}