interface Person {
    name: string,
    age: number,
    greet: (name: string) => void
};

interface Student extends Person {
    studentId: string
};

let person: Person = {
    name: 'Lily',
    age: 30,
    greet(name: string) {
        console.log('Hello ' + name);
    }
};

let student: Student = {
    name: 'Brown',
    age: 20,
    studentId: '19110211',
    greet(name: string) {
        console.log('Good morning ' + name);
    }
};

person.greet(person.name);
student.greet(student.name);