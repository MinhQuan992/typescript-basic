let person: {
    name: string,
    age: number,
    hobbies: string[], // This is called ARRAY
    role: [number, string] // This is called TUPLE - fixed length and fixed type
}
person = {
    name: 'Minh Quan',
    age: 21,
    hobbies: ['Sport', 'Piano', 'Cooking'],
    role: [2, 'author']
}

for (const hobby of person.hobbies) {
    console.log(hobby)
}

enum Type { MATH, PHYSICS, CHEMISTRY, BIOLOGY }

const book = {
    name: 'Math for children',
    price: 12,
    type: Type.MATH
}

if (book.type === Type.MATH) {
    console.log("Type is MATH")
}