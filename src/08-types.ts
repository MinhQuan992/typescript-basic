type Person = {
    name: string,
    age: number
};

type Student = {
    studentId: string
};

type Children = Person | Student;

let childOne: Children = {
    name: 'Angela',
    age: 5
};

let childTwo: Children = {
    studentId: '123'
};

console.log(childOne.name);
console.log(childTwo.studentId);