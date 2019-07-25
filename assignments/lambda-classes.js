// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject) {
        console.log(`${student} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach(function(subject) {
            console.log(subject);
        });
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }
}

class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel stand up time!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

// Instructors

const velma = new Instructor({
    name: 'Velma',
    location: 'City Town',
    age: 32,
    specialty: 'Science',
    favLanguage: 'Python',
    catchPhrase: 'Jinkies!',
});

const fred = new Instructor({
    name: 'Fred',
    location: 'City Town',
    age: 37,
    specialty: 'Traps',
    favLanguage: 'JavaScript',
    catchPhrase: 'Let\'s go, gang!',
})

// console.log(velma.catchPhrase);
// console.log(fred.name);
// velma.speak();
// velma.demo('CSS');
// fred.grade('Shaggy', 'JavaScript Arrays');

// Students

const daphne = new Student({
    name: 'Daphne',
    location: 'City Town',
    age: 28,
    previousBackground: 'Hairstylist',
    className: 'WEB22',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
});

const shaggy = new Student({
    name: 'Shaggy',
    location: 'City Town',
    age: 26,
    previousBackground: 'Unemployed',
    className: 'UX13',
    favSubjects: ['Responsive Design', 'Accessibility', 'Typography'],
});

// console.log(daphne.location);
// console.log(shaggy.previousBackground);
// shaggy.speak();
// daphne.listsSubjects();
// daphne.PRAssignment('CSS');
// shaggy.sprintChallenge('UX Fundamentals');

// Project Managers

const scoobyDoo = new ProjectManager ({
    name: 'Scooby-Doo',
    location: 'City Town',
    age: 'unknown',
    specialty: 'Eating',
    favLanguage: 'React',
    catchPhrase: 'Scooby-dooby-doo!',
    gradClassName: 'WEB14',
    favInstructor: 'Fred',
});

const scrappyDoo = new ProjectManager ({
    name: 'Scrappy-Doo',
    location: 'City Town',
    age: 'unknown',
    specialty: 'Fighting',
    favLanguage: 'Python',
    catchPhrase: 'Let me at \'em!',
    gradClassName: 'DS1',
    favInstructor: 'Velma',
})

// console.log(scoobyDoo.specialty);
// console.log(scoobyDoo.name);
// console.log(scrappyDoo.catchPhrase);
// console.log(scrappyDoo.favInstructor);
// scoobyDoo.speak();
// scoobyDoo.demo('HTML');
// scrappyDoo.standUp('ds_scrappy');
// scoobyDoo.debugsCode(daphne, 'JavaScript');