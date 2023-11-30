const personName: string = "Daniel"
const personAge: number = 16

const person1 = {personName, personAge}
const person2 = {personName, personAge}
const person3 = {personName, personAge}

const persons : Object[] = []

persons.push(person1, person2, person3)

console.log(persons)